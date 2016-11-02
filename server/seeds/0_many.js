exports.seed = function(knex, Promise) {

    return knex('many').del()
        .then(function() {
            return Promise.all([

                knex('many').insert({
                    task: 'Create app in less than 90 minutes.',
                    status: 'Incomplete'
                }),

                knex('many').insert({
                    task: 'Rejoice!',
                    status: 'Incomplete'
                })

            ]);
        });
};
