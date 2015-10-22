Testing CommonsChunkPlugin with bundle-loader.

I have a.js and b.js both sharing React lib. I'm trying to use CommonsChunkPlugin to extract React lib out so when requesting, it will async fire three requests:

* react as the common lib
* a.js
* b.js

currently, both a.js and b.js have React lib in it, which is not the case I want.