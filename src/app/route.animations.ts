import { trigger, transition, style, query, animate, group, AnimationMetadata } from '@angular/animations';

export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)'
            })
        ], { optional: true }),
        query(':enter', [
            animate('600ms ease', 
                style({
                    opacity: 1,
                    transform: 'scale(1) translateY(0)'
                })
            )
        ], { optional: true })
    ])
]);

export const slider = trigger('routeAnimations', [
    transition('* <=> *', slideTo('left')),
]);

export const transform = trigger('routeAnimations', [
    transition('* <=> *', translateTo({ x: -100, y: -100, rotate: -90 })),
]);

function slideTo(direction: string): AnimationMetadata[] {
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%',
            })
        ], { optional: true }),
        query(':enter', [
            style({ [direction]: '-100%' })
        ], { optional: true }),
        group([
            query(':leave', [
                animate('600ms ease', 
                    style({
                        [direction]: '100%'
                    })
                )
            ], { optional: true }),
            query(':enter', [
                animate('600ms ease', 
                    style({
                        [direction]: '0%'
                    })
                )
            ], { optional: true })
        ])
    ];
}

function translateTo({ x = 0, y = 0, rotate = 0 } = {}): AnimationMetadata[] {
    const optional = { optional: true };

    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], optional),

        query(':enter', [
            style({ 
                transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` 
            })
        ], optional),

        group([
            query(':leave', [
                animate('600ms ease-out', 
                    style({ 
                        transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` 
                    })
                )
            ], optional),

            query(':enter', [
                animate('600ms ease-out', 
                    style({ 
                        transform: `translate(0, 0) rotate(0)` 
                    })
                )
            ], optional)
        ])
    ];
}
