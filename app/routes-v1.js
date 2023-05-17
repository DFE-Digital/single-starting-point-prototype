const url = require('url');



var version = process.env.version



//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('/', function (req, res) {
  res.render(version+'/l1-home')
  })

  router.get('/l1-home', function (req, res) {
    res.render(version+'/l1-home')
    })


    router.get('/l3-find-near-me', function (req, res) {
      res.render(version+'/l3-find-near-me')
      })

      router.get('/l3-help-support', function (req, res) {
        res.render(version+'/l3-help-support')
        })

        router.get('/l3-search', function (req, res) {
          res.render(version+'/l3-search')
          })

          router.get('/l3-search-results', function (req, res) {
            res.render(version+'/l3-search-results')
            })
  
    //     router.get('/l3-help-with-applying', function (req, res) {
    //       res.render(version+'/l3-help-with-applying')
    //       })
    



      


// Add your routes here


// YOUNG PEOPLE AND ADULTS


router.get('/l2-young-people', function (req, res) {
  req.session['referingroute']="Young People"
  req.session['referingUrl']="/l2-young-people"
  res.render(version+'/l2-young-people', {})
})

router.get('/l2-adults', function (req, res) {
  req.session['referingroute']="Adults"
  req.session['referingUrl']="/l2-adults"
  res.render(version+'/l2-adults', {})
})

router.get('/l3-all-choices', function (req, res) {
  req.session['referingroute']="Training choices"
  req.session['referingUrl']="/l3-all-choices"
  res.render(version+'/l3-all-choices', {})
})

// HELP WITH APPLYING

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
  res.render(version+'/l3-help-with-applying', {pagename,page})
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
  res.render(version+'/l4-cv', {pagename,page})
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
  res.render(version+'/l4-interview-tips', {pagename,page})
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
  res.render(version+'/l4-application-form', {pagename,page})
})








// EXPLORE DIFFERENT CAREERS

router.get('/l3-explore', function (req, res) {
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
  res.render(version+'/l3-explore', {pagename,page})
})




router.get('/l4-job-idea-generator', function (req, res) {
  var pagename=""
  if(req.session['referingroute'] === "Adults") {
  pagename="Adults"
  }
  else if(req.session['referingroute'] === "Young People"){
  pagename="Young People" 
  }
  var page=req.session['referingUrl']
  res.render(version+'/l4-job-idea-generator', {pagename,page})
})


router.get('/jig-1', function (req, res) {
  var pagename=""
  if(req.session['referingroute'] === "Adults") {
  pagename="Adults"
  }
  else if(req.session['referingroute'] === "Young People"){
  pagename="Young People" 
  }
  var page=req.session['referingUrl']
  res.render(version+'jig-1', {pagename,page})
})

router.get('/jig-2', function (req, res) {
  var pagename=""
  if(req.session['referingroute'] === "Adults") {
  pagename="Adults"
  }
  else if(req.session['referingroute'] === "Young People"){
  pagename="Young People" 
  }
  var page=req.session['referingUrl']
  res.render(version+'jig-2', {pagename,page})
})

router.get('/jig-3', function (req, res) {
  var pagename=""
  if(req.session['referingroute'] === "Adults") {
  pagename="Adults"
  }
  else if(req.session['referingroute'] === "Young People"){
  pagename="Young People" 
  }
  var page=req.session['referingUrl']
  res.render(version+'jig-3', {pagename,page})
})

router.get('/jig-4', function (req, res) {
  var pagename=""
  if(req.session['referingroute'] === "Adults") {
  pagename="Adults"
  }
  else if(req.session['referingroute'] === "Young People"){
  pagename="Young People" 
  }
  var page=req.session['referingUrl']
  res.render(version+'jig-4', {pagename,page})
})

router.get('/jig-5', function (req, res) {
  var pagename=""
  if(req.session['referingroute'] === "Adults") {
  pagename="Adults"
  }
  else if(req.session['referingroute'] === "Young People"){
  pagename="Young People" 
  }
  var page=req.session['referingUrl']
  res.render(version+'jig-5', {pagename,page})
})

router.get('/jig-6', function (req, res) {
  var pagename=""
  if(req.session['referingroute'] === "Adults") {
  pagename="Adults"
  }
  else if(req.session['referingroute'] === "Young People"){
  pagename="Young People" 
  }
  var page=req.session['referingUrl']
  res.render(version+'jig-6', {pagename,page})
})

router.get('/jig-results', function (req, res) {
  var pagename=""
  if(req.session['referingroute'] === "Adults") {
  pagename="Adults"
  }
  else if(req.session['referingroute'] === "Young People"){
  pagename="Young People" 
  }
  var page=req.session['referingUrl']
  res.render(version+'jig-results', {pagename,page})
})



// OPTIONS AFTER LEAVING SCHOOL

router.get('/l3-options-school', function (req, res) {
  // var referer=req.headers.referer
  // const refererUrl = new URL(referer);
  // var page=refererUrl.pathname
  // var file=page.substring(page.lastIndexOf('/')+1)
  // console.log(referer)
  // console.log(page)
  // console.log(file)
  // var pagename=""
  // if(file === "l2-adults") {
  // pagename="Adults"
  // }
  // else if(file === "l2-young-people"){
  // pagename="Young People" 
  // }
  var page = req.session['referingUrl']
  var pagename = req.session['referingroute']
  res.render(version+'/l3-options-school', {pagename,page})
})







// CHOICES TO RETRAIN

router.get('/l3-choices-retrain', function (req, res) {
  // var referer=req.headers.referer
  // const refererUrl = new URL(referer);
  // var page=refererUrl.pathname
  // var file=page.substring(page.lastIndexOf('/')+1)
  // console.log(referer)
  // console.log(page)
  // console.log(file)
  // var pagename=""
  // if(file === "l2-adults") {
  // pagename="Adults"
  // }
  // else if(file === "l2-young-people"){
  // pagename="Young People" 
  // }
  var page = req.session['referingUrl']
  var pagename = req.session['referingroute']
  res.render(version+'/l3-choices-retrain', {pagename,page})
})



// COURSE PAGES - overwritten

// router.get('/l4-alevels', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-alevels', {pagename,page})
// })

// router.get('/l4-apprenticeships', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-apprenticeships', {pagename,page})
// })

// router.get('/l4-digital-essentials', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-digital-essentials', {pagename,page})
// })

// router.get('/l4-english-essentials', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-english-essentials', {pagename,page})
// })

// router.get('/l4-find-a-job', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-find-a-job', {pagename,page})
// })

// router.get('/l4-free-courses', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-free-courses', {pagename,page})
// })

// router.get('/l4-higher-education', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-higher-education', {pagename,page})
// })

// router.get('/l4-htqs', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-htqs', {pagename,page})
// })

// router.get('/l4-multiply', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-multiply', {pagename,page})
// })

// router.get('/l4-numeracy-essentials', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-numeracy-essentials', {pagename,page})
// })

// router.get('/l4-school-leavers', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-school-leavers', {pagename,page})
// })

// router.get('/l4-skills-bootcamps', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-skills-bootcamps', {pagename,page})
// })

// router.get('/l4-skills-toolkit', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-skills-toolkit', {pagename,page})
// })

// router.get('/l4-supported-internships', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-supported-internships', {pagename,page})
// })

// router.get('/l4-tlevels', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-tlevels', {pagename,page})
// })

// router.get('/l4-vtqs', function (req, res) {
//   var pagename=""
//   if(req.session['referingroute'] === "Adults") {
//   pagename="Adults"
//   }
//   else if(req.session['referingroute'] === "Young People"){
//   pagename="Young People" 
//   }
//   var page=req.session['referingUrl']
//   res.render('l4-vtqs', {pagename,page})
// })


// CAMPAIGN 1

router.get('/campaign-1', function (req, res) {
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
  res.render(version+'/campaign-1', {pagename,page})
})


// CAMPAIGN 2

router.get('/campaign-2', function (req, res) {
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
  res.render(version+'/campaign-2', {pagename,page})
})


// CAMPAIGN 3

router.get('/campaign-3', function (req, res) {
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
  res.render(version+'/campaign-3', {pagename,page})
})


// OPTIONS VS CHOICES - SCHEME PAGES

router.get('/l4-alevels', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-alevels', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-apprenticeships', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-apprenticeships', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-digital-essentials', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-digital-essentials', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-english-essentials', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-english-essentials', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-find-a-job', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-find-a-job', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-free-courses', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-free-courses', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-higher-education', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-higher-education', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-htqs', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-htqs', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-multiply', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-multiply', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-numeracy-essentials', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-numeracy-essentials', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-school-leavers', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-school-leavers', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-skills-bootcamps', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-skills-bootcamps', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-skills-toolkit', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-skills-toolkit', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-supported-internships', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-supported-internships', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-tlevels', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-tlevels', {pagename,page,pagenamel3,pagel3})
})

router.get('/l4-vtqs', function (req, res) {
  var referer=req.headers.referer
  const refererUrl = new URL(referer);
  var pagel3=refererUrl.pathname
  var file=pagel3.substring(pagel3.lastIndexOf('/')+1)
  console.log(referer)
  console.log(pagel3)
  console.log(file)
  var pagenamel3=""
  if(file === "l3-options-school") {
  pagenamel3="Options after leaving school or education"
  }
  else if(file === "l3-choices-retrain"){
  pagenamel3="Choices to retrain and find work" 
  }
  req.session['referingroutel3']=pagenamel3
  req.session['referingUrll3']=pagel3
var page = req.session['referingUrl']
var pagename = req.session['referingroute']

  res.render(version+'/l4-vtqs', {pagename,page,pagenamel3,pagel3})
})
