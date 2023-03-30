module.exports = {
    vaccineData: [
        {
            name: 'Vaccine#123a',
            base_price: 37,
        },
        {
            name: 'Vaccine#456b',
            base_price: 92,
        },
        {
            name: 'Vaccine#789c',
            base_price: 180,
        },
    ],
    petOwnerData: [
        {
            name: 'Julian Edwards',
            role: 'admin',
            pets: [
                {
                    name: 'Tigerlily',
                    type: 'cat',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administration_date: new Date(2013, 2, 14),
                            end_price: 20,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administration_date: new Date(2024, 0, 5),
                            end_price: 42,
                        },
                    ],
                },
                {
                    name: 'Ginger',
                    type: 'cat',
                },
            ],
        },
        {
            name: 'Frank Zappa',
            role: 'admin',
            pets: [{name: 'Fido', type: 'dog'}],
        },
        {
            name: 'Erik de Jong',
            role: 'user',
            pets: [
                {
                    name: 'Picasso',
                    type: 'cat',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administration_date: new Date(2009, 5, 19),
                            end_price: 10,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administration_date: new Date(2009, 7, 20),
                            end_price: 33,
                        },
                        {
                            vaccine: 'Vaccine#789c',
                            administration_date: new Date(2024, 8, 3),
                            end_price: 110,
                        },
                    ],
                },
            ],
        },
        {
            name: 'Sarah Smith',
            role: 'user',
            pets: [
                {
                    name: 'Polly',
                    type: 'Parrot',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administration_date: new Date(2015, 1, 5),
                            end_price: 37,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administration_date: new Date(2014, 11, 7),
                            end_price: 92,
                        },
                        {
                            vaccine: 'Vaccine#789c',
                            administration_date: new Date(2024, 3, 25),
                            end_price: 180,
                        },
                    ],
                },
                {
                    name: 'Bluestar',
                    type: 'cat',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administration_date: new Date(2010, 2, 2),
                            end_price: 25,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administration_date: new Date(2010, 3, 3),
                            end_price: 60,
                        },
                    ],
                },
            ],
        },
        {
            name: 'Monica Dames',
            role: 'user',
            pets: [
                {
                    name: 'Wobke',
                    type: 'dog',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administration_date: new Date(2016, 6, 29),
                            end_price: 12,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administration_date: new Date(2016, 7, 5),
                            end_price: 40,
                        },
                        {
                            vaccine: 'Vaccine#789c',
                            administration_date: new Date(2024, 6, 5),
                            end_price: 100,
                        },
                    ],
                },
                {
                    name: 'Mona',
                    type: 'cat',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#789c',
                            administration_date: new Date(2024, 6, 5),
                            end_price: 100,
                        },
                    ],
                },
                {
                    name: 'Dodger',
                    type: 'cat',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#789c',
                            administration_date: new Date(2024, 6, 5),
                            end_price: 100,
                        },
                    ],
                },
            ],
        },
        {
            name: 'Peter Kunst',
            role: 'user',
            pets: [
                {
                    name: 'Rex',
                    type: 'dog',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administration_date: new Date(2011, 10, 11),
                            end_price: 0,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administration_date: new Date(2011, 11, 15),
                            end_price: 5,
                        },
                    ],
                },
            ],
        },
        {
            name: 'Leo Lemniscaat',
            role: 'user',
            pets: [
                {
                    name: 'Bernard',
                    type: 'dog',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administration_date: new Date(2023, 9, 1),
                            end_price: 20,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administration_date: new Date(2023, 9, 1),
                            end_price: 40,
                        },
                        {
                            vaccine: 'Vaccine#789c',
                            administration_date: new Date(2023, 9, 27),
                            end_price: 90,
                        },
                    ],
                },
            ],
        },
    ],
}
