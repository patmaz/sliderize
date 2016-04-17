(function($) {

    $.fn.sliderize = function(options) {

        var settings = $.extend({
            // These are the defaults.
            switchSpeed: 1000,
            autoSwitchInterval: 10000
        }, options);

        return this.each(function() {
            var $mainContainer = $(this);
            var items = [];
            var height = $mainContainer.find('.item').first().height();
            var $dotsConteiner = $('<div class="dots"></div>');
            var $nextContainer = $('<div class="next">></div>');
            var $prevContainer = $('<div class="prev"><</div>');

            function findCurrentItemIndex() {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].css('opacity') != "0") {
                        return i;
                    }
                }
            }

            function switchToNextSlide() {
                var currentItemIndex = findCurrentItemIndex();

                if (currentItemIndex < (items.length - 1)) {
                    items[currentItemIndex].animate({
                            opacity: 0
                        },
                        settings.switchSpeed,
                        function() {
                            items[currentItemIndex].next('.item').animate({
                                    opacity: 1
                                },
                                settings.switchSpeed);
                        });
                } else {
                    items[currentItemIndex].animate({
                            opacity: 0
                        },
                        settings.switchSpeed,
                        function() {
                            items[0].animate({
                                    opacity: 1
                                },
                                settings.switchSpeed);
                        });
                }
            }

            function switchToPrevSlide() {
                var currentItemIndex = findCurrentItemIndex();

                if (currentItemIndex === 0) {
                    items[currentItemIndex].animate({
                            opacity: 0
                        },
                        settings.switchSpeed,
                        function() {
                            items[items.length - 1].animate({
                                    opacity: 1
                                },
                                settings.switchSpeed);
                        });
                } else {
                    items[currentItemIndex].animate({
                            opacity: 0
                        },
                        settings.switchSpeed,
                        function() {
                            items[currentItemIndex].prev('.item').animate({
                                    opacity: 1
                                },
                                settings.switchSpeed);
                        });
                }
            }

            $mainContainer
                .append($dotsConteiner, $nextContainer, $prevContainer)
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

            $nextContainer.css({
                    'position': 'absolute',
                    'top': '50%',
                    'right': '0',
                    'text-align': 'center',
                    'z-index': '100000',
                    'background-color': 'rgba(129, 124, 122, 0.9)',
                    'width': '20px',
                    'height': '20px',
                    'border-radius': '50%'
                })
                .click(function(e) {
                    switchToNextSlide();
                });

            $prevContainer.css({
                    'position': 'absolute',
                    'top': '50%',
                    'left': '0',
                    'text-align': 'center',
                    'z-index': '100000',
                    'background-color': 'rgba(129, 124, 122, 0.9)',
                    'width': '20px',
                    'height': '20px',
                    'border-radius': '50%'
                })
                .click(function(e) {
                    switchToPrevSlide();
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

            setInterval(function() { 
                switchToNextSlide();
            }, settings.autoSwitchInterval);
        });
    };

}(jQuery));
