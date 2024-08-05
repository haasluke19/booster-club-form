const documentBody = document.body;
const benefitsTitleEl = documentBody.getElementsByClassName('benefits__title')[0]
const sponsorshipEl = document.getElementsByClassName('benefit__sponsorship--para')[0]
const marketingEl = document.getElementsByClassName('benefit__marketing--para')[0]
const swagEl = document.getElementsByClassName('benefit__swag--para')[0]
const perksEl = document.getElementsByClassName('benefit__perks--para')[0]
const selectedTierEl = document.getElementById('selected_tier')
const successPriceEl = document.getElementById('payment-price')

const membershipTiers = [
  {
    tier: 'Platinum',
    level: 1,
    cost: '$10,000',
    sponsorship: '• <b>Title Sponsor</b> At The:<br/> Homecoming Football Game<br/> Senior Night Volleyball Game<br/>Senior Night Basketball Game<br/>Senior Night Wrestling Match<br/><br/>• The Sidney Cheer Team will have signs with platinum sponsor logo or family name on them for the above games',
    marketing: '• Logo or Family Name on 4’x6’ Banner at Weymouth Field<br/><br/>  • Logo or Family Name on Booster Club Sponsor Signage Banner<br/><br/>  • Logo or Family Name on our website<br/><br/>  • Logo or Family Name on Team Schedules<br/><br/> • Logo or Family Name on Homecoming game announcements<br/><br/>  • Logo or Family Name at Senior Night announcements on Booster Club Social Media<br/><br/>  • Logo or Family Name on 8 Athlete of the Week Posts<br/><br/>  • 50% of the Stadium Chairs purchased for rental program will have platinum sponsors logo or family name',
    swag: '• Autographed keepsake item from team of your choice<br/><br/> • Name on 3rd Qtr Throw-Outs<br/><br/> • Raider Decals<br/><br/> • Logo on Sports Schedule Calendar',
    perks: '• VIP Parking during title sponsor event<br/><br/> • 7 VIP Athletic Passes<br/><br/> • Free Popcorn Pass for all sporting events',
  },
  {
    tier: 'Diamond',
    level: 1,
    cost: '$5,000',
    sponsorship: '• <b>Title Sponsor</b> at 2 Athletic Events <br/>(Athletic event selection is on a first come first serve basis)<br/><br/>• The Sidney Cheer team will have signs with diamond sponsor logo or family name on them for the above games',
    marketing: '• Business logo or Family Name on 4’x6’ Banner at Weymouth Field<br/><br/> • Business Logo or Family Name on Booster Club Sponsor Signage Banner<br/><br/> • Business Logo or Family Name on our website<br/><br/> • Logo or Family Name on the selected games announcements on Booster Club Social Media<br/><br/> • Logo or Family Name on 4 Athlete of the Week posts<br/><br/> • 25% of the Stadium Chairs purchased for rental program will have diamond sponsors logo or family name',
    swag: '• Name on 3rd Qtr Throw-Outs<br/><br/> • Raider Decals<br/><br/> • Logo on Sports Schedule Calendar',
    perks: '• VIP Parking during title sponsor event<br/><br/> • 5 VIP Athletic Passes<br/><br/> • Free Popcorn Pass for all sporting events',
  },
  {
    tier: 'Gold',
    level: 1,
    cost: '$2,500',
    sponsorship: '• <b>Title Sponsor<b/> at 1 Athletic Event<br/>(Athletic event selection is on a first come first serve basis)<br/><br/>• The Sidney Cheer team will have signs with gold sponsor logo or family name on them for the above games.',
    marketing: '• Business Logo or Family Name on 2.5’ x 4’ Banner at Weymouth Field<br/><br/> • Business Logo or Family Name on Booster Club Sponsor Signage Banner<br/><br/> • Business Logo or Family Name on our website<br/><br/> • Business Logo or Family Name on the selected games announcements on Booster Club Social Media<br/><br/> • Business Logo or Family Name on 2 Athlete of the Week posts<br/><br/> • 15% of the Stadium Chairs purchased for rental program will have gold sponsors logo or family name',
    swag: '• Name on 3rd Qtr Throw-Outs<br/><br/> • Raider Decal<br/><br/> • Logo on Sports Schedule Calendar',
    perks: '• VIP Parking during title sponsor event<br/><br/> • 4 VIP Athletic Passes<br/><br/> • Free Popcorn Pass for all sporting events',
  },
  {
    tier: 'Silver',
    level: 2,
    cost: '$1,000',
    sponsorship: '',
    marketing: '• Business Logo or Family Name on 2.5’ x 4’ Banner at Weymouth Field<br/><br/> • Business Logo or Family Name on Booster Club Sponsor Signage Banner<br/><br/> • Business Logo or Family Name on our website<br/><br/> • 10% of the Stadium Chairs purchased for rental program will have silver sponsors logo or family name',
    swag: '• Name on 3rd Qtr Throw-Out<br/><br/> • Raider Decal<br/><br/> • Logo on Sports Schedule Calendar',
    perks: '• 3 VIP Athletic Passes<br/><br/> • Free Popcorn Pass for all sporting events',
  },
  {
    tier: 'Raider',
    level: 2,
    cost: '$500',
    sponsorship: '',
    marketing: '• Name Listed on Gym Signage<br/><br/> • Name Listed on Website',
    swag: '• Decal<br/><br/> • 2 Sports Schedule Calendars',
    perks: '• 3 Adult Passes<br/><br/> • Free Popcorn Pass',  
  },
  {
    tier: 'Red',
    level: 2,
    cost: '$250',
    sponsorship: '',
    marketing: '• Name Listed on Gym Signage<br/><br/> • Name Listed on Website',
    swag: '• Decal',
    perks: '• 2 Adult Passes<br/><br/> • Free Popcorn Pass',
  },
  {
    tier: 'Black',
    level: 3,
    cost: '$100',
    sponsorship: '',
    marketing: '• Name Listed on Website',
    swag: '• Decal',
    perks: '• 1 Adult Pass<br/><br/> • Free Popcorn Pass',
  },
  {
    tier: 'Individual',
    level: 3,
    cost: '$50',
    sponsorship: '',
    marketing: '• Name Listed on Website',
    swag: '• Decal',
    perks: '• Free Popcorn Pass',
  },
  {
    tier: 'Student',
    level: 3,
    cost: '$25',
    sponsorship: '',
    marketing: '• Name Listed on Website',
    swag: '• Decal',
    perks: '• Free Popcorn Pass',
  },
];

function selectedTier(value){
  console.log(value)
}

function showTier() {
  const membershipTier = document.getElementById("membership__broad").value;
  documentBody.classList.remove('tier-1', 'tier-2', 'tier-3');

  if (membershipTier === 'tier-1'){
    documentBody.classList.add('tier-1')
    clearMembershipSelection()
  }
  if (membershipTier === 'tier-2'){
    documentBody.classList.add('tier-2')
    clearMembershipSelection()
  }
  if (membershipTier === 'tier-3'){
    documentBody.classList.add('tier-3')
    clearMembershipSelection()
  }
}

function clearMembershipSelection() {
  const tierInputs = document.querySelectorAll('[name^="tier-"]');
  tierInputs.forEach((input) => {
    if (input.checked) {
      input.checked = false;
    }
  });
}

function setTierHTML(value){
  documentBody.classList.add('show-benefits')
  const tier = membershipTiers.find((tier) => tier.tier === value);
  if (tier.level > 1) {
    documentBody.classList.add('hide-sponsorship')
  }
  else{
    documentBody.classList.remove('hide-sponsorship')
  }
  selectedTierEl.value = `${tier.tier} (${tier.cost})`;
  benefitsTitleEl.innerHTML = tier.tier + ' Benefits'
  sponsorshipEl.innerHTML = tier.sponsorship
  marketingEl.innerHTML = tier.marketing
  swagEl.innerHTML = tier.swag
  perksEl.innerHTML = tier.perks
  successPriceEl.innerHTML = `We just need your payment of ${tier.cost}<br/>For ${tier.tier}`
}

function handleSubmit(event) {
  event.preventDefault(); 

  documentBody.classList.add('loading');

  fetch('https://script.google.com/macros/s/AKfycbw66HCUHSZgGJ8cI_a3mCURrN8-tpnVIpfY80CezrdwyQnjsH4DFp2ZNMKlQISbomen/exec', {
    method: 'POST',
    body: new FormData(event.target),
  })
  .then(response => {
    if (response.ok) {
      documentBody.classList.add('success')
    }
  })
  .catch(error => {
    documentBody.classList.add('error')
  });
}