define(['kbasesocialwidget', 'kbaseuserprofileserviceclient'], 
function (SocialWidget, UserProfileService) {
  
  var widget = Object.create(SocialWidget, {
    init: {
      value: function (cfg) {
        cfg.name = 'UserSearch';
        cfg.title = 'Find Other Users';
        this.SocialWidget_init(cfg);
        
        return this;
      }
    },
      
    go: {
      value: function () {
        this.start();
        return this;
      }
    },
    
    setup: {
      value: function () {
        // User profile service
        if (this.isLoggedIn()) {
          if (this.hasConfig('user_profile_url')) {
            this.userProfileClient = new UserProfileService(this.getConfig('user_profile_url'), {
                token: this.auth.authToken
            });
          } else {
					  throw 'The user profile client url is not defined';
				  }
        }        
      }
    },
    
    renderLayout: {
        value: function() {
            this.container.html(this.renderTemplate('layout'));
            this.places = {
            	title: this.container.find('[data-placeholder="title"]'),
              alert: this.container.find('[data-placeholder="alert"]'),
            	content: this.container.find('[data-placeholder="content"]')
            };
           
           // Only enable the search form if the user is logged in.
          if (this.isLoggedIn()) {
            var widget = this;
            this.container.find('[data-field="search_text"] input').on('keyup', function (e) {
              if ((e.key === undefined && e.keyCode === 27) || e.key === 'Esc' || e.key === 'Escape') {
                $(this).val('');
                widget.setState('searchResults', []);
                return;
              }
              widget.params.searchText = $(this).val();
              if (widget.params.searchText && widget.params.searchText.length < 3) {
                widget.refresh().done();
              } else {
                widget.promise(widget.userProfileClient, 'filter_users', {filter: widget.params.searchText})
                .then(function (users) {
                    widget.setState('searchResults', users);
                })
                .catch(function (err) {
                    widget.renderErrorView(err);
                })
              }
            });
          }
        }
    }
    
  });  
  return widget;
});