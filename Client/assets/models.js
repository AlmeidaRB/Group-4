var AlumniModel = Backbone.Model.extend({
  urlRoot: 'http://10.0.10.95:3000/graduates.json',
  defaults: function () {
    return {
      // first_name: '',
      // last_name: '',
      // photo: '',
      // title: '',
      // bio: '',
      // skills: [''],
      // education: [
      //   {
      //     school: '',
      //     degree: [
      //       {
      //         degreeType: '',
      //         degreeConcentration: '',
      //         years: {
      //           startYear: '',
      //           endYear: ''
      //         }
      //       }
      //     ]
      //   }
      // ],
      // experience: [
      //   {
      //     company: '',
      //     position: '',
      //     description: '',
      //     years: {
      //       startYear: '',
      //       endYear: ''
      //     }
      //   }
      // ],
      // gradTIY: {
      //   city: '',
      //   state: '',
      //   gradDate: ''
      // },
      // currentLocation: {
      //   city: '',
      //   state: ''
      // },
      // portfolioURL: '',
      // email: ''
    };
  },
  initialize: function () {
    console.log('AlumniModel initialized');
  }
});
