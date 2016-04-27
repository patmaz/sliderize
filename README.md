# Sliderize BETA
awfully simple photo slider :)

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
$('.slides').sliderize({
    switchSpeed: 100,
    autoSwitchInterval: 10000
});
```
the above values are the defaults

this plugin depends on jQuery
