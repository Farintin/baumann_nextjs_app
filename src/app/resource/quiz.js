const oilVsDry = {
    title: 'Oily vs Dry',
    titleAlt1: 'Oily/Dry',
    scoring: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 2.5
    },
    questions: [
        {
            n: 1,
            q: `After washing your face, don’t apply any moisturizer, sunscreen,toner, powder, or other products. 
                Two to three hours later, look in a mirror under bright lights. 
                Your forehead and cheeks feel or appear:`,
            objs: [
                {
                    v: 'a',
                    text: 'Very rough, flaky, or ashy'
                },
                {
                    v: 'b',
                    text: 'Tight'
                },
                {
                    v: 'c',
                    text: 'Well hydrated with no reflection of light'
                },
                {
                    v: 'd',
                    text: 'Shiny with reflection of bright light'
                }
            ]
        },
        {
            n: 2,
            q: `In photos, your face appears shiny:`,
            objs: [
                {
                    v: 'a',
                    text: 'Never, or you’ve never noticed shine'
                },
                {
                    v: 'b',
                    text: 'Sometimes'
                },
                {
                    v: 'c',
                    text: 'Frequently'
                },
                {
                    v: 'd',
                    text: 'Always'
                }
            ]
        },
        {
            n: 3,
            q: `Two to three hours after applying makeup foundation (or base) but no powder, your makeup appears:`,
            objs: [
                {
                    v: 'a',
                    text: 'Flaky or caked in wrinkles'
                },
                {
                    v: 'b',
                    text: 'Smooth'
                },
                {
                    v: 'c',
                    text: 'Shiny'
                },
                {
                    v: 'd',
                    text: 'Streaked and shiny'
                },
                {
                    v: 'e',
                    text: 'I do not wear facial foundation'
                }
            ]
        },
        {
            n: 4,
            q: `When in low-humidity environment, if you don’t use moisturizers or sunscreen, your facial skin:`,
            objs: [
                {
                    v: 'a',
                    text: 'Feels very dry or cracks'
                },
                {
                    v: 'b',
                    text: 'Feels tight'
                },
                {
                    v: 'c',
                    text: 'Feels normal'
                },
                {
                    v: 'd',
                    text: 'Looks shiny, or I never feel that I need moisturizer'
                },
                {
                    v: 'e',
                    text: 'Don’t know'
                }
            ]
        },
        {
            n: 5,
            q: `Look in a magnifying mirror. How many large pores, the size of the end of a pin or greater, 
                do you have?`,
            objs: [
                {
                    v: 'a',
                    text: 'None'
                },
                {
                    v: 'b',
                    text: 'A few in the T-zone (forehead and nose) only'
                },
                {
                    v: 'c',
                    text: 'Many'
                },
                {
                    v: 'd',
                    text: 'Tons!'
                },
                {
                    v: 'e',
                    text: 'Don’t know'
                }
            ]
        },
        {
            n: 6,
            q: `You would characterize your facial skin as:`,
            objs: [
                {
                    v: 'a',
                    text: 'Dry'
                },
                {
                    v: 'b',
                    text: 'Normal'
                },
                {
                    v: 'c',
                    text: 'Combination'
                },
                {
                    v: 'd',
                    text: 'Oily'
                }
            ]
        },
        {
            n: 7,
            q: `When you use soap that suds, bubbles, and foams vigorously, your facial skin:`,
            objs: [
                {
                    v: 'a',
                    text: 'Feel dry or cracks'
                },
                {
                    v: 'b',
                    text: 'Feels slightly dry but does not crack'
                },
                {
                    v: 'c',
                    text: 'Feel'
                },
                {
                    v: 'd',
                    text: 'I do not use soap or other foaming cletexters. (If this is because they make your skin dry, pick a.)'
                }
            ]
        },
        {
            n: 8,
            q: `If not moisturized, your facial skin feels tight:`,
            objs: [
                {
                    v: 'a',
                    text: 'Always'
                },
                {
                    v: 'b',
                    text: 'Sometimes'
                },
                {
                    v: 'c',
                    text: 'Rarely'
                },
                {
                    v: 'd',
                    text: 'Never'
                }
            ]
        },
        {
            n: 9,
            q: `You have clogged pores (blackheads or whiteheads):`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Rarely'
                },
                {
                    v: 'c',
                    text: 'Sometimes'
                },
                {
                    v: 'd',
                    text: 'Always'
                }
            ]
        },
        {
            n: 10,
            q: `Your face is oily in the T-zone (forehead and nose):`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Sometimes'
                },
                {
                    v: 'c',
                    text: 'Frequently'
                },
                {
                    v: 'd',
                    text: 'Always'
                }
            ]
        },
        {
            n: 11,
            q: `Two or three hours after applying moisturizer your cheeks are:`,
            objs: [
                {
                    v: 'a',
                    text: 'NeverVery rough, flaky, or ashy'
                },
                {
                    v: 'b',
                    text: 'Smooth'
                },
                {
                    v: 'c',
                    text: 'Slightly shiny'
                },
                {
                    v: 'd',
                    text: 'Shiny and slick, or I do not use moisturizer'
                }
            ]
        }
    ],
    result: {
        skinNature: [
            {
                min: 11,
                max: 16,
                value: 'you have dry skin.'
            },
            {
                min: 17,
                max: 26,
                value: 'you have slightly dry skin.'
            },
            {
                min: 27,
                max: 33,
                value: 'you have slightly oily skin.'
            },
            {
                min: 34,
                max: 44,
                value: 'you have very oily skin'
            }
        ],
        skinType: [
            {
                min: 11,
                max: 26,
                value: 'you are a D skin type.'
            },
            {
                min: 27,
                max: 44,
                value: 'you are an O skin type.'
            }
        ]
    }
}



const sensitiveVsResistant = {
    title: 'Sensitive vs Resistant',
    titleAlt1: 'Sensitive/Resistant',
    scoring: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 2.5
    },
    questions: [
        {
            n: 1,
            q: `You get red bumps on your face:`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Rarely'
                },
                {
                    v: 'c',
                    text: 'At least once a month'
                },
                {
                    v: 'd',
                    text: 'At least once a week'
                }
            ]
        },
        {
            n: 2,
            q: `Skin care products (including cletexters, moisturizers, toners, and
                makeup) cause your face to break out, get a rash, itch, or sting:
                `,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Rarely'
                },
                {
                    v: 'c',
                    text: 'Often'
                },
                {
                    v: 'd',
                    text: 'Always'
                },
                {
                    v: 'e',
                    text: 'I don’t wear products on my face'
                }
            ]
        },
        {
            n: 3,
            q: `Have you ever been diagnosed with acne or rosacea?`,
            objs: [
                {
                    v: 'a',
                    text: 'No'
                },
                {
                    v: 'b',
                    text: 'Friends and acquaintances tell me I have it'
                },
                {
                    v: 'c',
                    text: 'Yes'
                },
                {
                    v: 'd',
                    text: 'Yes, a severe case'
                },
                {
                    v: 'e',
                    text: 'Unsure'
                }
            ]
        },
        {
            n: 4,
            q: `If you wear jewelry that is not 14-carat gold, how often do you
                get a rash?
                `,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Rarely'
                },
                {
                    v: 'c',
                    text: 'Often'
                },
                {
                    v: 'd',
                    text: 'Alwaya'
                },
                {
                    v: 'e',
                    text: 'Unsure'
                }
            ]
        },
        {
            n: 5,
            q: `Sunscreens make your skin itch, burn, break out, or turn red:`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Rarely'
                },
                {
                    v: 'c',
                    text: 'Often'
                },
                {
                    v: 'd',
                    text: 'Always'
                },
                {
                    v: 'e',
                    text: 'I never wear sunscreen'
                }
            ]
        },
        {
            n: 6,
            q: `Have you ever been diagnosed with atopic dermatitis, eczema,or contact dermatitis (an
                allergic skin rash)?
               `,
            objs: [
                {
                    v: 'a',
                    text: 'No'
                },
                {
                    v: 'b',
                    text: 'Friends tell me I have it'
                },
                {
                    v: 'c',
                    text: 'Yes'
                },
                {
                    v: 'd',
                    text: 'Yes, a severe case'
                },
                {
                    v: 'e',
                    text: 'Unsure'
                }
            ]
        },
        {
            n: 7,
            q: `How often do you get a rash underneath your rings?`,
            objs:  [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Rarely'
                },
                {
                    v: 'c',
                    text: 'Often'
                },
                {
                    v: 'd',
                    text: 'Always'
                },
                {
                    v: 'e',
                    text: 'I do not earrings'
                }
            ]
        },
        {
            n: 8,
            q: `Fragranced bubble bath, massage oil, or body lotions make your skin break out, itch, or feel 
                dry:`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Rarely'
                },
                {
                    v: 'c',
                    text: 'Often'
                },
                {
                    v: 'd',
                    text: 'Always'
                },
                {
                    v: 'e',
                    text: `I never use these types of products (textwer
                        d if you don’t use them because they cause the above-mentioned problems)`
                }
            ]
        },
        {
            n: 9,
            q: `Can you use the soap provided in hotels on your body or face without a problem?`,
            objs: [
                {
                    v: 'a',
                    text: 'Yes'
                },
                {
                    v: 'b',
                    text: 'Most of the time, I don’t have a problem'
                },
                {
                    v: 'c',
                    text: 'No, my skin itches, turns red. Or breaks out'
                },
                {
                    v: 'd',
                    text: 'I would not use it. I’ve had too many problems in the past'
                },
                {
                    v: 'e',
                    text: 'I carry my own, so I’m unsure'
                }
            ]
        },
        {
            n: 10,
            q: `Has someone in your family been diagnosed with atopic dermatitis, eczema, asthma,
                and/or allergies?`,
            objs: [
                {
                    v: 'a',
                    text: 'No'
                },
                {
                    v: 'b',
                    text: 'One family member that I know'
                },
                {
                    v: 'c',
                    text: 'Several family members'
                },
                {
                    v: 'd',
                    text: 'Many of my family members have dermatitis, eczema, asthma, and/or allergies'
                },
                {
                    v: 'e',
                    text: 'Unsure'
                }
            ]
        },
        {
            n: 11,
            q: `What occurs if you use scented laundry detergents or static control sheets in the dryer?`,
            objs: [
                {
                    v: 'a',
                    text: 'My skin is fine'
                },
                {
                    v: 'b',
                    text: 'My skin feels slightly dry'
                },
                {
                    v: 'c',
                    text: 'My skin itches'
                },
                {
                    v: 'd',
                    text: 'My skin itches and gets a rash'
                },
                {
                    v: 'e',
                    text: 'Unsure, or I’ve never used them'
                }
            ]
        },
        {
            n: 12,
            q: `How often do your face and/or neck get red after moderate exercise, and/or with stress or 
                a strong emotion, such as anger?`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Sometimes'
                },
                {
                    v: 'c',
                    text: 'Frequently'
                },
                {
                    v: 'd',
                    text: 'Always'
                }
            ]
        },
        {
            n: 13,
            q: `How often do you tend to get red and flushed after drinking alcohol?`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Sometimes'
                },
                {
                    v: 'c',
                    text: 'Frequently'
                },
                {
                    v: 'd',
                    text: 'Always, or I don’t drink because of this problem'
                },
                {
                    v: 'e',
                    text: 'I never drink alcohol'
                }
            ]
        },
        {
            n: 14,
            q: `How often do you get red and flushed after eating spicy or hot (temperature) foods or 
                beverages?`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Sometimes'
                },
                {
                    v: 'c',
                    text: 'Frequently'
                },
                {
                    v: 'd',
                    text: 'Always'
                },
                {
                    v: 'e',
                    text: 'I never eat spicy food (if you do not eat spicy or hot food bc of facial flushing, pick d )'
                }
            ]
        },
        {
            n: 15,
            q: `How many visible red or blue broken blood vessels do you have (or did you have prior to 
                treatment) on your face or nose?`,
            objs: [
                {
                    v: 'a',
                    text: 'None'
                },
                {
                    v: 'b',
                    text: 'Few (one to three on entire face, including nose)'
                },
                {
                    v: 'c',
                    text: 'Some (four to six on entire face, including nose)'
                },
                {
                    v: 'd',
                    text: 'Some (four to six on entire face, including nose)'
                }
            ]
        },
        {
            n: 16,
            q: `Your face looks red in photographs:`,
            objs: [
                {
                    v: 'a',
                    text: 'Never, or I never noticed it'
                },
                {
                    v: 'b',
                    text: 'Sometimes'
                },
                {
                    v: 'c',
                    text: 'Frequently'
                },
                {
                    v: 'd',
                    text: 'Always'
                }
            ]
        },
        {
            n: 17,
            q: `People ask you if you are sunburned, even when you are not:`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Sometimes'
                },
                {
                    v: 'c',
                    text: 'Frequently'
                },
                {
                    v: 'd',
                    text: 'Always'
                }
            ]
        },
        {
            n: 18,
            q: `You get redness, itching, or swelling from makeup, sunscreen, or skin care products`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Sometimes'
                },
                {
                    v: 'c',
                    text: 'Frequently'
                },
                {
                    v: 'd',
                    text: 'Always'
                },
                {
                    v: 'e',
                    text: `I do not use these products (textwer d if you don’t use them bc of redness, itching, or 
                        swelling`
                }
            ]
        }
    ],
    extra: [
        {
            text: `you have ever received a diagnosis of acne, rosacea, contact
                dermatitis, or eczema from a dermatologist`,
            points: 5,
            defaultAns: false
        },
        {
            text: `another type of physician has diagnosed you with these conditions`,
            points: 2,
            defaultAns: false
        }
    ],
    result: {
        skinNature: [
            {
                min: 17,
                max: 24,
                value: 'you have very resistant skin'
            },
            {
                min: 25,
                max: 29,
                value: 'you have somewhat resistant skin'
            },
            {
                min: 30,
                max: 33,
                value: 'you have somewhat sensitive skin'
            },
            {
                min: 34,
                max: 72,
                value: 'you have very sensitive skin'
            }
        ],
        skinType: [
            {
                min: 17,
                max: 29,
                value: 'you are an R skin type'
            },
            {
                min: 30,
                max: 68,
                value: 'you are an S skin type'
            }
        ]
    }
}



const pigmentedVsNonPigmented = {
    title: 'Pigmented vs. Non Pigmented',
    titleAlt1: 'Pigmented/Non Pigmented',
    scoring: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 2.5
    },
    questions: [
        {
            n: 1,
            q: `After you have a pimple or ingrown hair, it’s followed by a dark brownish, black, spot:`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Sometimes'
                },
                {
                    v: 'c',
                    text: 'Frequently'
                },
                {
                    v: 'd',
                    text: 'Always'
                },
                {
                    v: 'e',
                    text: 'I never get pimples or ingrown hairs'
                }
            ]
        },
        {
            n: 2,
            q: `After you cut yourself, how long does the brown (not pink) mark remain?`,
            objs: [
                {
                    v: 'a',
                    text: 'I don’t get a brown mark'
                },
                {
                    v: 'b',
                    text: 'A week'
                },
                {
                    v: 'c',
                    text: 'A few week'
                },
                {
                    v: 'd',
                    text: 'Months'
                }
            ]
        },
        {
            n: 3,
            q: `How many dark sports did you develop on your face when you were pregnant, on birth 
            control pills, or taking hormone replacement therapy (HRT)?`,
            objs: [
                {
                    v: 'a',
                    text: 'None'
                },
                {
                    v: 'b',
                    text: 'One'
                },
                {
                    v: 'c',
                    text: 'A few'
                },
                {
                    v: 'd',
                    text: 'A lot'
                },
                {
                    v: 'e',
                    text: 'This question does not apply to me'
                }
            ]
        },
        {
            n: 4,
            q: `Do you have any dark spots or patches on your upper lip or cheeks? Or have you had any in 
            the past that you’ve had removed?`,
            objs: [
                {
                    v: 'a',
                    text: 'No'
                },
                {
                    v: 'b',
                    text: 'I’m not sure'
                },
                {
                    v: 'c',
                    text: 'Yes, the are (or were) slightly noticeable'
                },
                {
                    v: 'd',
                    text: 'Yes, they are (or were) very noticeable'
                }
            ]
        },
        {
            n: 5,
            q: `Do the dark spots on your face get worse when you go in the sun?`,
            objs: [
                {
                    v: 'a',
                    text: 'I have no dark spots'
                },
                {
                    v: 'b',
                    text: 'Unsure'
                },
                {
                    v: 'c',
                    text: 'Slightly worse'
                },
                {
                    v: 'd',
                    text: 'I wear sunscreen on my face every day and never get sun'
                }
            ]
        },
        {
            n: 6,
            q: `Have you been diagnosed with melasma, light or dark brown or gray patches, on your face?`,
            objs: [
                {
                    v: 'a',
                    text: 'No'
                },
                {
                    v: 'b',
                    text: 'Once, but it went away'
                },
                {
                    v: 'c',
                    text: 'Yes'
                },
                {
                    v: 'd',
                    text: 'Yes, a severe case'
                },
                {
                    v: 'e',
                    text: 'Unsure'
                }
            ]
        },
        {
            n: 7,
            q: `Do you have, or have you
            ever had, small brown spots (freckles or sun spots) on your face, 
           chest, back, or arms?
           `,
            objs:  [
                {
                    v: 'a',
                    text: 'No'
                },
                {
                    v: 'b',
                    text: 'Yes, a few (1-5)'
                },
                {
                    v: 'c',
                    text: 'Yes, many (6-15)'
                },
                {
                    v: 'd',
                    text: 'Yes, tons (16+)'
                }
            ]
        },
        {
            n: 8,
            q: `When exposed to sun for the first time in several months, your skin:`,
            objs: [
                {
                    v: 'a',
                    text: 'Burns only'
                },
                {
                    v: 'b',
                    text: 'Burns, then gets darker'
                },
                {
                    v: 'c',
                    text: 'Gets darker'
                },
                {
                    v: 'd',
                    text: 'My skin is already dark, so it is hard to see if it gets darker'
                }
            ]
        },
        {
            n: 9,
            q: `What happens after you have had many days of consecutive sun exposure:`,
            objs: [
                {
                    v: 'a',
                    text: 'I sunburn and blister, but my skin does not change color'
                },
                {
                    v: 'b',
                    text: 'I sunburn and blister, but my skin does not change color'
                },
                {
                    v: 'c',
                    text: 'My skin becomes much darker'
                },
                {
                    v: 'd',
                    text: 'My skin is already dark, so it is hard to see if it gets darker.'
                },
                {
                    v: 'e',
                    text: 'Unsure'
                }
            ]
        },
        {
            n: 10,
            q: `When you go in the sun, do you develop freckles (small 1-2 mm pinpoint-sized flat 
                spots)?`,
            objs: [
                {
                    v: 'a',
                    text: 'No, I never develop them'
                },
                {
                    v: 'b',
                    text: 'I develop a few new small freckles each year'
                },
                {
                    v: 'c',
                    text: 'I develop new freckles often'
                },
                {
                    v: 'd',
                    text: 'My skin is already dark, so it is hard to see if I have freckles'
                },
                {
                    v: 'e',
                    text: 'I never go in the sun'
                }
            ]
        },
        {
            n: 11,
            q: `Did either of your parents have freckles? If so, please indicate how many. If neither or one 
                the parents responded to the question. If both did, answer the question as it relates to the 
                parent with more freckles.`,
            objs: [
                {
                    v: 'a',
                    text: 'No'
                },
                {
                    v: 'b',
                    text: 'A few on the face'
                },
                {
                    v: 'c',
                    text: 'Many on the face'
                },
                {
                    v: 'd',
                    text: 'Many on face, chest, neck, and shoulders'
                },
                {
                    v: 'e',
                    text: 'Unsure'
                }
            ]
        },
        {
            n: 12,
            q: `What is your natural hair color? (If gray, state color before graying.)`,
            objs: [
                {
                    v: 'a',
                    text: 'Blond'
                },
                {
                    v: 'b',
                    text: 'Brown'
                },
                {
                    v: 'c',
                    text: 'Blank'
                },
                {
                    v: 'd',
                    text: 'Red'
                }
            ]
        },
        {
            n: 13,
            q: `Do you have a history of melanoma yourself or in your immediate family?`,
            objs: [
                {
                    v: 'a',
                    text: 'No'
                },
                {
                    v: 'b',
                    text: 'One person in my family'
                },
                {
                    v: 'c',
                    text: 'More than one person in my family'
                },
                {
                    v: 'd',
                    text: 'I have a history of melanoma'
                },
                {
                    v: 'e',
                    text: 'Unsure'
                }
            ]
        }
    ],
    extra: [
        {
            text: `You have dark spots on your skin in areas of sun exposure?`,
            points: 5,
            defaultAns: false
        }
    ],
    result: {
        skinType: [
            {
                min: 12,
                max: 25,
                value: 'you are an N skin type'
            },
            {
                min: 26,
                max: 52,
                value: 'you are an S skin type'
            }
        ]
    }
}



const wrinkledVsTight = {
    title: 'Wrinkled vs. Tight',
    titleAlt1: 'Wrinkled/Tight',
    scoring: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 2.5
    },
    questions: [
        {
            n: 1,
            q: `Do you have facial wrinkles?`,
            objs: [
                {
                    v: 'a',
                    text: 'No, not even with movement such as smiling, frowning, or lifting my eyebrows'
                },
                {
                    v: 'b',
                    text: 'Only when I move, such as smiling, frowning, or lifting my eyebrows'
                },
                {
                    v: 'c',
                    text: 'Yes, with movement and a few at rest without movement'
                },
                {
                    v: 'd',
                    text: 'Wrinkles are present even if I’m not smiling, frowning, or lifting my brows'
                }
            ]
        },
        {
            n: 2,
            q: `How old does/did your mother’s facial skin look?`,
            objs: [
                {
                    v: 'a',
                    text: 'Five to ten years younger than her age'
                },
                {
                    v: 'b',
                    text: 'Her age'
                },
                {
                    v: 'c',
                    text: 'Five years older than her age'
                },
                {
                    v: 'd',
                    text: 'More than five years older than her age'
                },
                {
                    v: 'e',
                    text: 'Not applicable; I was adopted or I cannot remember'
                }
            ]
        },
        {
            n: 3,
            q: `How old does/did your father’s facial skin look?`,
            objs: [
                {
                    v: 'a',
                    text: 'Five to ten years younger than his age'
                },
                {
                    v: 'b',
                    text: 'His age'
                },
                {
                    v: 'c',
                    text: 'Five years older than his age'
                },
                {
                    v: 'd',
                    text: 'More than five years older than his age'
                },
                {
                    v: 'e',
                    text: 'Not applicable; I was adopted or I cannot remember'
                }
            ]
        },
        {
            n: 4,
            q: `How old does your maternal grandmother’s facial skin look?`,
            objs: [
                {
                    v: 'a',
                    text: 'Five to ten years younger than her age'
                },
                {
                    v: 'b',
                    text: 'Her age'
                },
                {
                    v: 'c',
                    text: 'Five years older than her age'
                },
                {
                    v: 'd',
                    text: 'More than five years older than her age'
                },
                {
                    v: 'e',
                    text: 'Not applicable; I was adopted, never knew her, or cannot remember'
                }
            ]
        },
        {
            n: 5,
            q: `How old does/did your maternal grandfather’s facial skin look?`,
            objs: [
                {
                    v: 'a',
                    text: 'Five to ten years younger than his age'
                },
                {
                    v: 'b',
                    text: 'His age'
                },
                {
                    v: 'c',
                    text: 'Five years older than his age'
                },
                {
                    v: 'd',
                    text: 'More than five years older'
                },
                {
                    v: 'e',
                    text: 'Not applicable; I was adopted, never knew her, or cannot remember'
                }
            ]
        },
        {
            n: 6,
            q: `How old does/did your paternal grandmother’s facial skin
                look?`,
            objs: [
                {
                    v: 'a',
                    text: 'Five to ten years younger than her age'
                },
                {
                    v: 'b',
                    text: 'Her age'
                },
                {
                    v: 'c',
                    text: 'Five years older than her age'
                },
                {
                    v: 'd',
                    text: 'More than five years older'
                },
                {
                    v: 'e',
                    text: 'Not applicable; I was adopted, never knew her, or cannot remember'
                }
            ]
        },
        {
            n: 7,
            q: `How does your paternal grandfather’s facial skin look?`,
            objs:  [
                {
                    v: 'a',
                    text: 'Five to ten years younger than his age'
                },
                {
                    v: 'b',
                    text: 'His age'
                },
                {
                    v: 'c',
                    text: 'Five years older than his age'
                },
                {
                    v: 'd',
                    text: 'More than five years older'
                },
                {
                    v: 'e',
                    text: 'Not applicable; I was adopted, never knew her, or cannot remember'
                }
            ]
        },
        {
            n: 8,
            q: `At any time in your life, have you ever tanned your skin on an ongoing basis for more than 
                two week per year? If so,for how many total years did you do this? Please count tanning from
                playing tennis, fishing, playing golf, skiing, orother outdoor activities.`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'One to five years'
                },
                {
                    v: 'c',
                    text: 'Five to ten years'
                },
                {
                    v: 'd',
                    text: 'More than ten years'
                }
            ]
        },
        {
            n: 9,
            q: `At any time in your life, have you ever engaged in seasonal tanning of two weeks per year 
                or less? If so, how often?`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'One to five years'
                },
                {
                    v: 'c',
                    text: 'Five to ten years'
                },
                {
                    v: 'd',
                    text: 'More than ten years'
                }
            ]
        },
        {
            n: 10,
            q: `Based on the places you’ve lived, how much daily sun exposure have you received in 
                your life?`,
            objs: [
                {
                    v: 'a',
                    text: 'Little; I’ve mostly lived in places that are gray and overcast.'
                },
                {
                    v: 'b',
                    text: 'Some; I’ve lived in less sunny climes at times, but also in places with more regular sun.'
                },
                {
                    v: 'c',
                    text: 'Moderate; I’ve lived in places with a fair amount of  sun exposure.'
                },
                {
                    v: 'd',
                    text: 'A lot; I’ve lived in tropical, Southern, or very sunny locales.'
                }
            ]
        },
        {
            n: 11,
            q: `How old do you think you look?`,
            objs: [
                {
                    v: 'a',
                    text: 'One to five years younger than your age'
                },
                {
                    v: 'b',
                    text: 'Your age'
                },
                {
                    v: 'c',
                    text: 'Five years older than your age'
                },
                {
                    v: 'd',
                    text: 'More than five years older than your age'
                }
            ]
        },
        {
            n: 12,
            q: `During the last five years, how often have you allowed your skin to tan either intentionally 
                or unintentionally through outdoor sports or other activities?`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'Once a month'
                },
                {
                    v: 'c',
                    text: 'Once a week'
                },
                {
                    v: 'd',
                    text: 'Daily'
                }
            ]
        },
        {
            n: 13,
            q: `How often, if ever, have you been to a tanning bed?`,
            objs: [
                {
                    v: 'a',
                    text: 'Never'
                },
                {
                    v: 'b',
                    text: 'One to five times'
                },
                {
                    v: 'c',
                    text: 'Five to ten times'
                },
                {
                    v: 'd',
                    text: 'Many times'
                }
            ]
        },
        {
            n: 14,
            q: `Over your entire life, how many cigarettes have you smoked (or been exposed to)?`,
            objs: [
                {
                    v: 'a',
                    text: 'None'
                },
                {
                    v: 'b',
                    text: 'A few packs'
                },
                {
                    v: 'c',
                    text: 'Several to many packs'
                },
                {
                    v: 'd',
                    text: 'I smoke every day.'
                },
                {
                    v: 'e',
                    text: `I’ve never smoked but I’ve lived with, been raised by, or worked with people who regularly
                        smoked in my presence.`
                }
            ]
        },
        {
            n: 15,
            q: `Please describe the air pollution where you reside:`,
            objs: [
                {
                    v: 'a',
                    text: 'The air is fresh and clean.'
                },
                {
                    v: 'b',
                    text: `For part of the year, but not all of the year, I reside in
                        a place with clean air.`
                },
                {
                    v: 'c',
                    text: 'The air is slightly polluted.'
                },
                {
                    v: 'd',
                    text: 'The air is very polluted.'
                }
            ]
        },
        {
            n: 16,
            q: `Please describe the length of time that you have used retinoid facial creams such as 
                retinol, Renova, Retin-A, Tazorac, Differin, or Avage:`,
            objs: [
                {
                    v: 'a',
                    text: 'Many years'
                },
                {
                    v: 'b',
                    text: 'Occasionally'
                },
                {
                    v: 'c',
                    text: 'Once for acne when I was younger'
                },
                {
                    v: 'd',
                    text: 'Never'
                }
            ]
        },
        {
            n: 17,
            q: `How often do you currently eat fruits and vegetables?`,
            objs: [
                {
                    v: 'a',
                    text: 'At every mealr'
                },
                {
                    v: 'b',
                    text: 'Once a day'
                },
                {
                    v: 'c',
                    text: 'Occasionally'
                },
                {
                    v: 'd',
                    text: 'Never'
                }
            ]
        },
        {
            n: 18,
            q: `Over your lifetime, what percentage of your daily diet has consisted of fruits and 
                vegetables?`,
            objs: [
                {
                    v: 'a',
                    text: '75-100%'
                },
                {
                    v: 'b',
                    text: '25-75%'
                },
                {
                    v: 'c',
                    text: '10-25%'
                },
                {
                    v: 'd',
                    text: '0-10%'
                }
            ]
        },
        {
            n: 19,
            q: `What is your natural skin color (without tanning or self- tanners)?`,
            objs: [
                {
                    v: 'a',
                    text: 'Darkr'
                },
                {
                    v: 'b',
                    text: 'Medium'
                },
                {
                    v: 'c',
                    text: 'Light'
                },
                {
                    v: 'd',
                    text: 'Very light'
                }
            ]
        },
        {
            n: 20,
            q: `What is your ethnicity?`,
            objs: [
                {
                    v: 'a',
                    text: 'African-American/Caribbean/Black'
                },
                {
                    v: 'b',
                    text: 'Asian/Indian/Mediterranean/Other'
                },
                {
                    v: 'c',
                    text: 'Latin-American/Hispanic'
                },
                {
                    v: 'd',
                    text: 'Caucasian'
                }
            ]
        }
    ],
    extra: [
        {
            text: `You are sixty-five or older?`,
            points: 5,
            defaultAns: false
        }
    ],
    result: {
        skinType: [
            {
                min: 20,
                max: 40,
                value: 'you are an T skin type'
            },
            {
                min: 41,
                max: 85,
                value: 'you are an W skin type'
            }
        ]
    }
}




export {
    oilVsDry,
    sensitiveVsResistant,
    pigmentedVsNonPigmented,
    wrinkledVsTight
}