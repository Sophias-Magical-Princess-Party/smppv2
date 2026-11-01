#!/usr/bin/env python3
"""Shrink the images referenced by the site pages.

Usage: python3 -I tools_optimize_images.py   (Pillow with WebP support required;
set PYTHONPATH-free by adding a path via the PILLOW_PATH env var if needed).
Originals stay in git history. Only overwrites when the result is smaller.
"""
import os, re, sys
if os.environ.get('PILLOW_PATH'):
    sys.path.insert(0, os.environ['PILLOW_PATH'])
from PIL import Image, ImageOps

PAGES = ['index.html', 'characters/index.html', 'photos/index.html']
PAGE_MAX, GALLERY_MAX, THUMB_MAX, QUALITY = 1400, 1600, 400, 78

def save(img, dest, maxdim):
    img = ImageOps.exif_transpose(img)
    img.thumbnail((maxdim, maxdim), Image.LANCZOS)
    if img.mode not in ('RGB', 'RGBA'):
        img = img.convert('RGBA' if 'transparency' in img.info else 'RGB')
    tmp = dest + '.tmp'
    img.save(tmp, 'WEBP', quality=QUALITY, method=6)
    if os.path.exists(dest) and os.path.getsize(tmp) >= os.path.getsize(dest):
        os.remove(tmp); return 0
    os.replace(tmp, dest); return 1

page_imgs, gallery = set(), set()
for p in PAGES:
    t = open(p, encoding='utf-8').read()
    for m in re.findall(r'assets/([A-Za-z0-9_.%-]+\.(?:webp|jpg|jpeg|png))', t):
        page_imgs.add(m)
    if p.startswith('photos'):
        gallery |= set(re.findall(r'data-ngthumb="([^"]+)"', t))
page_imgs -= gallery

os.makedirs('assets/thumbs', exist_ok=True)
before = after = 0
for name in sorted(page_imgs | gallery):
    src = 'assets/' + name
    if not os.path.exists(src): print('missing', name); continue
    before += os.path.getsize(src)
    dest = os.path.splitext(src)[0] + '.webp'
    save(Image.open(src), dest, GALLERY_MAX if name in gallery else PAGE_MAX)
    if name in gallery:
        save(Image.open(dest), 'assets/thumbs/' + os.path.basename(dest), THUMB_MAX)
    after += os.path.getsize(dest)
print('before %.1f MB, after %.1f MB' % (before/2**20, after/2**20))
