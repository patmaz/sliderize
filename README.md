# Sliderize BETA
awfully simple photo slider for your website :)

##How to use
###html structure
```html
<div class="slides">
  <div class="item"><img src="lorem.jpg"></div>
  <div class="item"><img src="lorem.jpg"></div>
  <div class="item"><img src="lorem.jpg"></div>
  <div class="item"><img src="lorem.jpg"></div>
  <div class="item"><img src="lorem.jpg"></div>
  <div class="item"><img src="lorem.jpg"></div>
</div>
```
note that "item" class' name is obligatory!

### js function
```javascript
$('.slides').sliderize({ switchSpeed: 100 });
```
default switch speed is 1000 ms

this plugin depends on jQuery
