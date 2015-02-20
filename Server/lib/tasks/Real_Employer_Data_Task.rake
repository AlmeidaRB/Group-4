task create_employers: :environment do
  puts "10 employers created"
    Employer.create!({
      name: 'BenefitFocus',
      photo: 'http://www.mitcio.com/sites/default/files/imagecache/gold_sponsor/benefitfocus.jpg',
      bio: 'Benefitfocus is a leading provider of benefits technology. More than 23 million consumers manage all types of benefits in the Benefitfocus Cloud. By delivering technology that integrates all benefits in one place, Benefitfocus provides a better way to engage consumers, educate employees and simplify benefit enrollment and management.',
      industry: 'Software Provider',
      size: '1200',
      date_founded: '1998',
      email: 'hr@benefitfocus.com',
      location: 'Charleston, SC'
    })
    Employer.create!({
      name: 'Jack Russell Software',
      photo: 'http://www.jackrussellsoftware.com/images/jackhq-logo.png',
      bio: 'At JRS, we have 6 development teams. Each team uses a different technology stack for its product line. Every stack must communicate via http/json api, which provides a rich integration amongst the technologies. Over time, we will continue to add new technology, but we also strive to be very selective to keep the on boarding of developers as efficient as possible.',
      industry: 'Software Provider',
      size: '58',
      date_founded: '2004',
      email: 'hr@jrs.com',
      location: 'Charleston, SC'
    })
    Employer.create!({
      name: 'CreateSpace',
      photo: 'The publishing industry is evolving. Hundreds of thousands of authors like you are publishing profitable work right now instead of waiting for agents and publishers to give the green light.
        With CreateSpace you can easily access tools, quality printing, booksellers, eBook distribution, and marketing strategies so that you can generate more opportunities than you imagined – all while building your following of readers.',
      industry: 'On-Demand Publishing',
      size: '350',
      date_founded: '2001',
      email: 'hr@createspace.com',
      location: 'North Charleston, SC'
    })
    Employer.create!({
      name: 'SPARC',
      photo: 'http://www.sparcedge.com/wp-content/uploads/2013/10/sparc-logo-blog.png',
      bio: 'SPARC is a software product development company creating engaging, forward-thinking technology while keeping Team Members at the core of everything we do. With offices in Charleston, South Carolina and Washington, D.C., SPARC provides software development services for the government and commercial sectors, and develops commercial software products for the executive leadership, human resources, big data analytics, and mobile markets. In 2013, SPARC was ranked by Inc. 500 as the 14th fastest-growing private company in the U.S.',
      industry: 'Software Provider',
      size: '225',
      date_founded: '2006',
      email: 'hr@sparcedge.com',
      location: 'Charleston, SC'
    })
    Employer.create!({
      name: 'Blue Acorn',
      photo: 'http://d13yacurqjgara.cloudfront.net/users/49203/avatars/normal/Untitled-1.png',
      bio: 'Blue Acorn is a full service eCommerce agency, and we have gone to great lengths to recruit experts for every piece of the eCommerce success puzzle. Our clients don’t have to go to one company for design, another for development, another for marketing, and another for optimization. They have us. While we do take on clients that just need help in a particular area, we enjoy the opportunity to utilize our collective skillset in helping online retailers grow.',
      industry: 'Software Provider',
      size: '87',
      date_founded: '2008',
      email: 'hr@blueacorn.com',
      location: 'Charleston, SC'
    })
    Employer.create!({
      name: 'McDonalds',
      photo: 'http://img1.wikia.nocookie.net/__cb20100717060808/logopedia/images/a/a9/Mcdonalds-90s-logo.svg',
      bio: 'The McDonalds Corporation is the largest chain of hamburger fast food restaurants in the world, serving around 68 million customers daily in 119 countries across 35,000 outlets.  Headquartered in the United States, the company began in 1940 as a barbecue restaurant operated by Richard and Maurice McDonald.  In 1948, they reorganized their business as a hamburger stand using production line principles. Businessman Ray Kroc joined the company as a franchise agent in 1955. He subsequently purchased the chain from the McDonald brothers and oversaw its worldwide growth.',
      industry: 'Fast Food Provider',
      size: '450,000',
      date_founded: '1956',
      email: 'hr@mcd.com',
      location: 'Charleston, SC'
    })
    Employer.create!({
      name: 'BenefitFocus',
      photo: 'http://az274887.vo.msecnd.net/images/directory/71394_logo.gif',
      bio: 'Benefitfocus is a leading provider of benefits technology. More than 23 million consumers manage all types of benefits in the Benefitfocus Cloud. By delivering technology that integrates all benefits in one place, Benefitfocus provides a better way to engage consumers, educate employees and simplify benefit enrollment and management.',
      industry: 'Software Provider',
      size: '1200',
      date_founded: '1998',
      email: 'hr@benefitfocus.com',
      location: 'Charleston, SC'
    })
    Employer.create!({
      name: 'BenefitFocus',
      photo: 'http://az274887.vo.msecnd.net/images/directory/71394_logo.gif',
      bio: 'Benefitfocus is a leading provider of benefits technology. More than 23 million consumers manage all types of benefits in the Benefitfocus Cloud. By delivering technology that integrates all benefits in one place, Benefitfocus provides a better way to engage consumers, educate employees and simplify benefit enrollment and management.',
      industry: 'Software Provider',
      size: '1200',
      date_founded: '1998',
      email: 'hr@benefitfocus.com',
      location: 'Charleston, SC'
    })
    Employer.create!({
      name: 'BenefitFocus',
      photo: 'http://az274887.vo.msecnd.net/images/directory/71394_logo.gif',
      bio: 'Benefitfocus is a leading provider of benefits technology. More than 23 million consumers manage all types of benefits in the Benefitfocus Cloud. By delivering technology that integrates all benefits in one place, Benefitfocus provides a better way to engage consumers, educate employees and simplify benefit enrollment and management.',
      industry: 'Software Provider',
      size: '1200',
      date_founded: '1998',
      email: 'hr@benefitfocus.com',
      location: 'Charleston, SC'
    })
    Employer.create!({
      name: 'BenefitFocus',
      photo: 'http://az274887.vo.msecnd.net/images/directory/71394_logo.gif',
      bio: 'Benefitfocus is a leading provider of benefits technology. More than 23 million consumers manage all types of benefits in the Benefitfocus Cloud. By delivering technology that integrates all benefits in one place, Benefitfocus provides a better way to engage consumers, educate employees and simplify benefit enrollment and management.',
      industry: 'Software Provider',
      size: '1200',
      date_founded: '1998',
      email: 'hr@benefitfocus.com',
      location: 'Charleston, SC'
    })  
end