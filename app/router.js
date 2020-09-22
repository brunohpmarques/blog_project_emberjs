import EmberRouter from '@ember/routing/router';
import config from 'blog-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('articles', {path: '/articles'}, function() {
    this.route('new', {path: '/new'});
  });
  this.route('categories', {path: '/categories'}, function() {
    this.route('new', {path: '/new'});
  });
  this.route('authors', {path: '/authors'}, function() {
    this.route('new', {path: '/new'});
  });
});
