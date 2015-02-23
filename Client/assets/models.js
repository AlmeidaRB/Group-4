//ALUMNI MODEL

var AlumniModel = Backbone.Model.extend({
  urlRoot: 'https://frozen-basin-2630.herokuapp.com/graduates.json',
  defaults: function () {
    return {
      id:0,
      photo:'',
      bio:'',
      current_city:'',
      current_state:'',
      grad_city:'',
      grad_state:'',
      email:'',
      grad_date:'',
      created_at:'',
      updated_at:'',
      first_name:'',
      last_name:'',
      links:[
        {
          graduate_id:0,
          id:0,
          url:'',
          description:'',
          created_at:'',
          updated_at:''
        }
      ],
      experiences:[
        {
          graduate_id:0,
          id:0,
          company:'',
          description:'',
          position:'',
          start_date:'',
          end_date:'',
          created_at:'',
          updated_at:''
        }
      ],
      skills:[
        {
          id:0,
          skill:'',
          created_at:'',
          updated_at:''
        }
      ],
      educations:[
        {
          graduate_id:0,
          id:0,
          school_name:'',
          created_at:'',
          updated_at:'',
          degrees:[
            {
              education_id:0,
              id:0,
              start_date:0,
              end_date:'',
              concentration:'',
              created_at:'',
              updated_at:'',
              degree_type:''
            }
          ]
        }
      ]
    };
  },
  initialize: function () {
    console.log('AlumniModel initialized');
  }
});

//EMPLOYER MODEL

var EmployerModel = Backbone.Model.extend({
  urlRoot: 'https://frozen-basin-2630.herokuapp.com/employers.json',
  defaults: function () {
    return {
      id:0,
      photo:'',
      name:'',
      industry:'',
      location:'',
      date_founded:'',
      size:'',
      bio:''
    };
  },
  initialize: function () {
    console.log('EmployerModel initialized');
  }
});
