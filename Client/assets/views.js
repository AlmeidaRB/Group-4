var alumniModelTest = new AlumniModel({
  name: {
    first: 'Ted',
    last: 'Mosby'
  },
  photo: 'http://www.fillmurray.com/300/300',
  title: 'Front-end Engineer',
  bio: 'In west Philidelphia born and raised',
  skills: [
    'on',
    'a',
    'playground',
    'is',
    'where',
    'i\'d',
    'most',
    'of',
    'my',
    'days'
  ],
  education: [
    {
      school: 'This is a school',
      degree: [
        {
          degreeType: 'PhD',
          degreeConcentration: 'Psychology',
          years: {
            startYear: '1995',
            endYear: '2001'
          }
        }
      ]
    }
  ],
  experience: [
    {
      company: 'Tom and Jerry\'s',
      position: 'Manager',
      description: 'Managed ice cream',
      years: {
        startYear: '1978',
        endYear: '2012'
      }
    }
  ],
  gradTIY: {
    city: 'Atlanta',
    state: 'Georgia',
    gradDate: '1957'
  },
  currentLocation: {
    city: 'Omaha',
    state: 'Nebraska'
  },
  portfolioURL: 'this is a fake url',
  email: 'this is a fake email'
});
//
// var alumniModelTestTwo = new AlumniModel({
//   name: {
//     first: 'Frank',
//     last: 'Sinatra'
//   },
//   photo: 'http://www.placecage.com/300/300',
//   title: 'Front-end Engineer',
//   bio: 'In west Philidelphia born and raised',
//   skills: [
//     'on',
//     'a',
//     'playground',
//     'is',
//     'where',
//     'i\'d',
//     'most',
//     'of',
//     'my',
//     'days'
//   ],
//   education: [
//     {
//       school: 'This is a school',
//       degree: [
//         {
//           degreeType: 'PhD',
//           degreeConcentration: 'Psychology',
//           years: {
//             startYear: '1995',
//             endYear: '2001'
//           }
//         }
//       ]
//     }
//   ],
//   experience: [
//     {
//       company: 'Tom and Jerry\'s',
//       position: 'Manager',
//       description: 'Managed ice cream',
//       years: {
//         startYear: '1978',
//         endYear: '2012'
//       }
//     }
//   ],
//   gradTIY: {
//     city: 'Atlanta',
//     state: 'Georgia',
//     gradDate: '1957'
//   },
//   currentLocation: {
//     city: 'Omaha',
//     state: 'Nebraska'
//   },
//   portfolioURL: 'this is a fake url',
//   email: 'this is a fake email'
// });



//Model View

var AlumniView = Backbone.View.extend({
  template: _.template($('#alumniTmpl').html()),
  tagName: 'ul',
  className: 'bxslider',
  initialize: function () {
    console.log('AlumniView initialized');
    console.log(this.el);
  },
  events: {

  },
  render: function () {
  this.$el.html(this.template(this.model.toJSON()));
  return this;
  }

});

// Collection View

var CollectionView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('CollectionView initialized');

    this.addAll();
  },
  events: {

  },
  addOne: function (passedAlumni) {
  var alumniView = new AlumniView({model: passedAlumni});
  this.$el.append(alumniView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
    $('.bxslider').bxSlider();
  }
});
