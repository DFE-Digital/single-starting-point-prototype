const url = require('url');







//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('/', function (req, res) {
    res.redirect('/l1-home')
  })



// Add your routes here

router.get('/l3-help-with-applying', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var page=refererUrl.pathname
  var file=page.substring(page.lastIndexOf('/')+1)
  console.log(referer)
  console.log(page)
  console.log(file)
  var pagename=""
  if(file === "l2-adults") {
  pagename="Adults"
  }
  else if(file === "l2-young-people"){
  pagename="Young People" 
  }
  req.session['referingroute']=pagename
  req.session['referingUrl']=page
  res.render('l3-help-with-applying', {pagename,page})
})



router.get('/l4-cv', function (req, res) {
  var pagename=""
  if(req.session['referingroute'] === "Adults") {
  pagename="Adults"
  }
  else if(req.session['referingroute'] === "Young People"){
  pagename="Young People" 
  }
  var page=req.session['referingUrl']
  res.render('l4-cv', {pagename,page})
})

router.get('/l4-interview-tips', function (req, res) {
  var pagename=""
  if(req.session['referingroute'] === "Adults") {
  pagename="Adults"
  }
  else if(req.session['referingroute'] === "Young People"){
  pagename="Young People" 
  }
  var page=req.session['referingUrl']
  res.render('l4-interview-tips', {pagename,page})
})

router.get('/l4-application-form', function (req, res) {
  var pagename=""
  if(req.session['referingroute'] === "Adults") {
  pagename="Adults"
  }
  else if(req.session['referingroute'] === "Young People"){
  pagename="Young People" 
  }
  var page=req.session['referingUrl']
  res.render('l4-application-form', {pagename,page})
})

