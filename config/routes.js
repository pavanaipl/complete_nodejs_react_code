/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'POST /api/trade-information/create': 'DetailsController.create',
  'GET /api/trade-information/get': 'DetailsController.get',
  'POST /api/trade-information/update': 'DetailsController.update',
  'POST /api/trade-information/delete/': 'DetailsController.delete',
  'POST /api/search-entity-type': 'EntityTypeSearchController.create',
  'POST /api/search-transaction-type': 'TransactionTypeController.create',
  'POST /api/search-transaction-date': 'TransactionDateController.create',
  'POST /api/free-text-serach': 'FreetextSearchController.create'


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
