const iconNames = [
	'arrow.qrcode.left',
	'arrow.qrcode.right',
	'send.to.mobile.iphone',
	'2d',
	'3d',
	'accessible',
	'account',
	'add.asset',
	'add.map.note',
	'add',
	'analytics',
	'api',
	'ar',
	'arrow.down',
	'arrow.left',
	'arrow.right',
	'arrow.up',
	'art',
	'asset.management',
	'baggage.cart',
	'baggage.claim',
	'baggage.drop',
	'baggage.office',
	'baggage.oversize',
	'baggage.repack',
	'baggage.service',
	'baggage',
	'baggage.wrap',
	'banner.ribbon',
	'bar',
	'beacon',
	'blackjack',
	'breakfast',
	'building',
	'business.center',
	'calendar',
	'camera',
	'charging',
	'check',
	'checkin.curbside',
	'checkin.premium',
	'checkin.reception',
	'checkin',
	'chevron.down',
	'chevron.left',
	'chevron.right',
	'chevron.up',
	'circle.check',
	'close',
	'close.window',
	'coffee',
	'coins-1',
	'coins',
	'compass.color',
	'conference.room-1',
	'conference.room',
	'connecting.room',
	'convention.ballroom',
	'convention.exhibithall',
	'convention.meetingroom',
	'convention',
	'copy',
	'dark.mode',
	'delete.text',
	'directions.filled',
	'documentation',
	'door',
	'dynamicLabel',
	'eat.bar',
	'eat.cafeteria',
	'eat.coffee',
	'eat.kitchen',
	'eat',
	'eat.vending',
	'edge',
	'edit.circle',
	'edit',
	'element.door',
	'element.hidden',
	'element.showing',
	'elevator.new',
	'elevator',
	'email',
	'entertainment.aquarium',
	'entertainment.club',
	'entertainment.gentlemansclub',
	'entertainment.show',
	'entertainment',
	'equipment.printer',
	'equipment',
	'escalator',
	'exit',
	'exit.toapp',
	'external.link',
	'files',
	'filter.sliders',
	'filter',
	'fire.alarm',
	'flash',
	'fully.stocked.bar',
	'gambling.highlimit',
	'gambling.poker',
	'gambling.slots',
	'gambling.sportsbook',
	'gambling',
	'gambling.tables',
	'gate.arrival',
	'gate.departures',
	'gate',
	'generic.amenity',
	'grab.new',
	'grab.old',
	'graph',
	'hamburger.menu',
	'hand.sanitizer',
	'help.outline',
	'help',
	'home',
	'hot.slot',
	'hotel',
	'hvac',
	'iOS',
	'image.export',
	'image',
	'inactive',
	'info',
	'kiosk.pin',
	'kiosk',
	'lab',
	'language',
	'levels',
	'lg.triangle.down',
	'lg.triangle.left',
	'lg.triangle.right',
	'lg.triangle.up',
	'light.mode',
	'link',
	'list.view',
	'll',
	'loader',
	'location',
	'lock',
	'logout',
	'map.2',
	'map.angled',
	'map.filled',
	'map.layers',
	'map.location',
	'map.notes.hidden',
	'map.notes',
	'map',
	'meeting.area',
	'meeting.auditorium',
	'meeting.conferenceroom.large',
	'meeting.conferenceroom.medium',
	'meeting.conferenceroom.small',
	'meeting.conferenceroom',
	'meeting.room',
	'meeting.stage',
	'meeting',
	'menu',
	'minus',
	'mobile.entry',
	'money',
	'mouse.cursor',
	'move.arrows',
	'move.note',
	'my.location.arrow.stroke',
	'my.location.arrow',
	'my.location',
	'my.location2',
	'no.entry',
	'no.results',
	'no.smoking',
	'number.ofseats',
	'office.shared',
	'office',
	'opening.hours.smaller',
	'opening.hours',
	'order.food',
	'parking.accessible',
	'parking.ev',
	'parking',
	'pdf',
	'pen.tool',
	'phone',
	'pin.arrivals',
	'pin.departures',
	'pin.gabordering',
	'pin.mobileentry',
	'pin.selected',
	'pinch',
	'plus',
	'poker',
	'portal.bus',
	'portal.elevator',
	'portal.escalator',
	'portal.movingwalkway',
	'portal.ramp',
	'portal.stairs',
	'portal',
	'portal.train',
	'premium.wine',
	'profile',
	'projector',
	'publish',
	'question.mark',
	'recreation.gameroom',
	'recreation.garden',
	'recreation.gym',
	'recreation.lounge',
	'recreation.movietheater',
	'recreation.patio',
	'recreation.pool',
	'recreation.sports',
	'recreation',
	'relax.chair',
	'relax.childrensplayarea',
	'relax.lounge',
	'relax.observationdeck',
	'relax.photobooth',
	'relax.prayerroom',
	'relax.seating',
	'relax.showers',
	'relax.spa',
	'relax',
	'relax.tv',
	'reserve',
	'reset',
	'restart',
	'restroom.accessible',
	'restroom.babycare',
	'restroom.family',
	'restroom.female',
	'restroom.lockers.female',
	'restroom.lockers.male',
	'restroom.lockers',
	'restroom.male',
	'restroom',
	'restroom.unisex',
	'restrooms',
	'room.breakroom',
	'room.classroom',
	'room.electrical',
	'room.lab',
	'room.mail',
	'room.mechanical',
	'room.serverroom',
	'room.storage',
	'room',
	'rotate.left',
	'rotate.right',
	'section.building.arrivals',
	'section.building.baggage',
	'section.building.checkin',
	'section.building.departures',
	'section.building.eat',
	'section.building.gate',
	'section.building.inactive',
	'section.building.security',
	'section.building.shop',
	'section.building',
	'section.building.transport',
	'security.agricultureinspection',
	'security.badge',
	'security.camera',
	'security.checkpoint',
	'security.customs',
	'security.desk',
	'security.emergencyexit',
	'security.employee',
	'security.exit',
	'security.passportcontrol',
	'security',
	'send.to.mobile.2.larger',
	'send.to.mobile.2',
	'send.to.mobile',
	'services.aed',
	'services.animalreliefarea',
	'services.atm',
	'services.auditoryassistance',
	'services.bank',
	'services.bikerack',
	'services.cashier',
	'services.changingroomadult',
	'services.chargingstation',
	'services.concierge',
	'services.currencyexchange.dollar',
	'services.currencyexchange.euro',
	'services.currencyexchange.pound',
	'services.currencyexchange',
	'services.directory',
	'services.drinkingfountain',
	'services.firstaid',
	'services.information',
	'services.internet',
	'services.laundry',
	'services.lostproperty',
	'services.lottery',
	'services.mailbox',
	'services.meetingpoint',
	'services.mobilityassistance',
	'services.mothersroom',
	'services.movie',
	'services.newspaper',
	'services.police',
	'services.prepaidcard',
	'services.rentalcar',
	'services.rewards',
	'services.shoeshine',
	'services.smokingarea',
	'services.soapdispenser',
	'services.specialservices',
	'services',
	'services.waterrefill',
	'services.wedding',
	'servy',
	'settings',
	'share.location',
	'shop',
	'showers',
	'sign.out',
	'snacks',
	'social.facebook',
	'social.instagram',
	'social.snapchat',
	'social.twitter',
	'social.weblink',
	'social.whatsapp',
	'social.youtube',
	'social.microsoft.color',
	'social.google.color',
	'social.facebook.color',
	'social.twitter.color',
	'social.linkedin.color',
	'social.dropbox.color',
	'social.github.color',
	'square.check',
	'stairs',
	'starting.point',
	'step.by.step.arrow',
	'stop',
	'submenu',
	'success',
	'summary',
	'support',
	'swap',
	'swipe.2',
	'swipe',
	'table.game',
	'tap.2',
	'tap',
	'team',
	'terms.of.service',
	'text.tool',
	'theatre',
	'theme',
	'tick',
	'ticketing.selfcheckinkiosk',
	'ticketing',
	'tools',
	'transport.passengerdropoff',
	'transport.passengerpickup',
	'transport.sharedride',
	'transport.shuttle.public',
	'transport.shuttle.secure',
	'transport.shuttle',
	'transport',
	'transport.taxi',
	'transport.train',
	'transport.valet',
	'trash',
	'triangle.down',
	'triangle.left',
	'triangle.right',
	'triangle.up',
	'triangle.warning',
	'tv',
	'upload',
	'users',
	'vending',
	'venues',
	'walking',
	'warning',
	'wayfinding.bus.down',
	'wayfinding.bus',
	'wayfinding.bus.up',
	'wayfinding.elevator.down',
	'wayfinding.elevator',
	'wayfinding.elevator.up',
	'wayfinding.entry',
	'wayfinding.escalator.down',
	'wayfinding.escalator',
	'wayfinding.escalator.up',
	'wayfinding.exit',
	'wayfinding.movingwalkway',
	'wayfinding.ramp.down',
	'wayfinding.ramp',
	'wayfinding.ramp.up',
	'wayfinding.security',
	'wayfinding.stairs.down',
	'wayfinding.stairs',
	'wayfinding.stairs.up',
	'wayfinding.train.down',
	'wayfinding.train',
	'wayfinding.train.up',
	'web',
	'website',
	'wifi',
	'workstation.hotdesk',
	'workstation',
	'zone',
	'zoom.in',
	'zoom.out',
].sort((a, b) => {
	return a.localeCompare(b);
});

export default iconNames;