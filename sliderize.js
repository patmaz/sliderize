(function($) {

    $.fn.sliderize = function(options) {

        var settings = $.extend({
            // These are the defaults.
            switchSpeed: 1000
        }, options);

        return this.each(function() {
            var $mainContainer = $(this);
            var items = [];
            var height = $mainContainer.find('.item').first().height();
            var $dotsConteiner = $('<div class="dots"></div>');
            //var indexOfActiveItem = 0;

            $mainContainer
                .append($dotsConteiner)
                .css({
                    'min-width': '100%',
                    'height': height,
                    'position': 'relative',
                    'overflow': 'hidden'
                })
                .find('.item').css({
                    'display': 'inline-block',
                    'min-width': 'inherit',
                    'position': 'absolute',
                    'top': '0',
                    'left': '0'
                })
                .find('img').css({
                    'display': 'block',
                    'margin': '0 auto'
                });

            $dotsConteiner.css({
                'position': 'relative',
                'top': '95%',
                'text-align': 'center',
                'z-index': '100000',
                'background-color': 'rgba(129, 124, 122, 0.9)'
            });

            $mainContainer.children('.item').each(function() {
                var self = $(this);
                items.push(self);

                if (items.length === 1) {
                    self.css({
                        'opacity': '1'
                    });
                } else {
                    self.css({
                        'opacity': '0'
                    });
                }

                $mainContainer.find('.dots').append(function(index, html) {
                    return $('<div class="dot"></div>').click(function(e) {
                        self.siblings('.item').animate({
                                opacity: 0
                            },
                            settings.switchSpeed,
                            function() {
                                self.animate({
                                        opacity: 1
                                    },
                                    settings.switchSpeed);
                            });
                    });
                });
            });

            $mainContainer.find('.dot').css({
                'display': 'inline-block',
                'width': '20px',
                'height': '20px',
                'background-color': 'red',
                'border-radius': '50%',
                'margin': '5px'
            });
        });
    };

}(jQuery));