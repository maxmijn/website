import React from 'react'
import vmc from '../Images/vmc_white.png'

function FirstCase () {
  return (
    <div className='SecondPage row'>
      <div className='Right col-sm-6'>
        <img src={vmc} class='VMC-Logo' />
        <div style={{ height: 100, marginTop: 50 }}>
          <a href="https://apps.apple.com/us/app/vmc-go/id1434419887?mt=8"><img class='Ios-app' src='https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2018-09-24&kind=iossoftware&bubble=ios_apps'/></a>
          <a href='https://play.google.com/store/apps/details?id=com.vmc.travel&hl=en_US&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img class='Android-app' alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
        </div>
      </div>
      <div className='Left col-sm-6'>
        <h1>VMC GO</h1>
        <p> My name is Max Mijnheer. I am a developer from Amsterdam. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. </p>
        <a href='//https://vmc.ai'>VMC.ai website</a>
      </div>
    </div>
  )
}

export default FirstCase
