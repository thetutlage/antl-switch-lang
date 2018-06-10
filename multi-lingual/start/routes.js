'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ view, antl }) => {
  return view.render('home', { locales: antl.availableLocales() })
})


Route.get('/switch/:lang', ({ params, antl, request, response }) => {
  const locales = antl.availableLocales()

  if (locales.includes(params.lang)) {
    response.cookie('lang', params.lang, { path: '/' })
  }
  
  response.redirect('back')
})
