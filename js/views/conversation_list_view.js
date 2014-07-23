var Whisper = Whisper || {};

(function () {
  'use strict';

  Whisper.ConversationListView = Whisper.ListView.extend({
    tagName: 'ul',
    id: 'contacts',
    itemView: Whisper.ConversationView,
    collection: Whisper.Threads,

    events: {
      'select .conversation': 'select',
    },

    select: function(e) {
      var target = $(e.target).closest('.conversation');
      target.siblings().addClass('closed');
      target.addClass('selected').trigger('open');
      return false;
    },
  });
})();