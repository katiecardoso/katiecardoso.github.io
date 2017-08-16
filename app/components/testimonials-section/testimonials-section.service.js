( function() {
  'use strict';

  function TestimonialsSectionService() {
    this.stacyTornio = {
      author: "Stacy Tornio, author of <i>The Kids’ Outdoor Adventure Book</i>",
      content: "I've worked with dozens of editors over the years, and Katie is one of my very favorites. She is smart, creative, and has a strong, clear vision for any project she's on. She's one of those people that I would work with on anything."
    };

    this.marenHorjus = {
      author: "Maren Horjus, author of <i>Haunted Hikes</i>",
      content: "Katie’s excitement over our project was truly infectious, allowing us to push the envelope of where fact and fiction can meet in storytelling. She shepherded it from concept to bookshelf, which freed me up to focus entirely on the stories and not get lost in the weeds. As an editor, Katie is the most attentive I’ve worked with, and I sincerely hope to create more radical content with her in the future."
    };

    this.johnnyMolloy = {
      author: "Johnny Molloy, author of over 60 outdoor guides",
      content: "I've had the opportunity to work with Katie on numerous book projects. She shepherded my guidebooks with a steady hand, getting things done correctly and on time. She brings a business approach to the table, always holding up her end of responsibility, yet can also have a little fun at the same time. Katie is a critical thinker, seeking and finding solutions to old problems or coming up with new projects and book ideas. In short, Katie is reliable, innovative, and a pleasant person to work with."
    };
  }

  angular.module( 'components' )

    .service( 'TestimonialsSectionService', [ TestimonialsSectionService ] );
} )();
