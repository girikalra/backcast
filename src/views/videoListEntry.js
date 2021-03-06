var VideoListEntryView = Backbone.View.extend({
  
  
  
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  
  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
