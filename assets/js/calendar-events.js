// sample calendar events data

'use strict'

var curYear = moment().format('YYYY');
var curMonth = moment().format('MM');

// Calendar Event Source
var calendarEvents = {
  id: 1,
  backgroundColor: '#d9e8ff',
  borderColor: '#0168fa',
  events: [
  ]
};

// Birthday Events Source
var birthdayEvents = {
  id: 2,
  backgroundColor: '#c3edd5',
  borderColor: '#10b759',
  events: [
    {
      id: '1',
      start: curYear+'-'+curMonth+'-04T05:00:00',
      end: curYear+'-'+curMonth+'-04T09:00:00',
      title: 'Anneke: Makeup lamaran dan ibu',
      description: 'Komp. Pertamina Blok M No. 29 Jakarta Utara'
    },
    {
      id: '2',
      start: curYear+'-'+curMonth+'-04T13:00:00',
      end: curYear+'-'+curMonth+'-04T18:00:00',
      title: 'Nura: Wedding akad dan resepsi',
      description: 'IS Plaza pramuka'
    },
    {
      id: '3',
      start: curYear+'-'+curMonth+'-11T11:00:00',
      end: curYear+'-'+curMonth+'-11T014:00:00',
      title: 'Tessalonika S: Paket makeup wedding batak',
      description: 'Gereja HKBP Tridharma'
    },
    {
      id: '4',
      start: curYear+'-'+curMonth+'-12T04:00:00',
      end: curYear+'-'+curMonth+'-12T07:00:00',
      title: 'Frisca Sinaga: Makeup wedding',
      description: 'Mercure Hotel Alam Sutera'
    },
    {
      id: '5',
      start: curYear+'-'+curMonth+'-12T04:00:00',
      end: curYear+'-'+curMonth+'-12T07:00:00',
      title: 'Fitry Hardina: Makeup party',
      description: 'Jl. Masjid gg. Sakim no. A4. Jatikramat'
    },
    {
      id: '6',
      start: curYear+'-'+curMonth+'-18T15:00:00',
      end: curYear+'-'+curMonth+'-18T17:00:00',
      title: 'Anneke: Paket makeup wedding batak',
      description: "d'ARCICI Hotel ALUR LAUT"
    },
    {
      id: '7',
      start: curYear+'-'+curMonth+'-18T07:00:00',
      end: curYear+'-'+curMonth+'-18T09:00:00',
      title: 'dr. Feny: Makeup party',
      description: 'Hotel Langham SCBD Jakarta'
    },
    {
      id: '8',
      start: curYear+'-'+curMonth+'-18T15:00:00',
      end: curYear+'-'+curMonth+'-18T17:00:00',
      title: 'Rahma Hanum: Makeup mome bride',
      description: 'Balai Samudera, Kelapa Gading'
    },
    {
      id: '9',
      start: curYear+'-'+curMonth+'-18T02:00:00',
      end: curYear+'-'+curMonth+'-18T05:00:00',
      title: 'Theresia Agatha: Paket makeup wedding batak',
      description: 'Jl. Nurul hidayah Gg. Lengkeng'
    },
    {
      id: '10',
      start: curYear+'-'+curMonth+'-25T06:00:00',
      end: curYear+'-'+curMonth+'-25T09:00:00',
      title: 'Tasya: Makeup dan lamaran ibu',
      description: 'Jalan Basoka Raya no.64, Joglo, Jakarta'
    },
    {
      id: '11',
      start: curYear+'-'+curMonth+'-26T04:00:00',
      end: curYear+'-'+curMonth+'-26T07:00:00',
      title: 'Ditastya vallerie: Makeup wedding',
      description: 'Lebak Bulus'
    },
    {
      id: '12',
      start: curYear+'-'+curMonth+'-18T02:00:00',
      end: curYear+'-'+curMonth+'-18T05:00:00',
      title: 'Theresia Agatha: Paket makeup wedding batak',
      description: 'Jl. Nurul hidayah Gg. Lengkeng'
    },
    {
      id: '13',
      start: curYear+'-'+curMonth+'-18T02:00:00',
      end: curYear+'-'+curMonth+'-18T05:00:00',
      title: 'Theresia Agatha: Paket makeup wedding batak',
      description: 'Jl. Nurul hidayah Gg. Lengkeng'
    },
    {
      id: '14',
      start: curYear+'-'+curMonth+'-18T02:00:00',
      end: curYear+'-'+curMonth+'-18T05:00:00',
      title: 'Theresia Agatha: Paket makeup wedding batak',
      description: 'Jl. Nurul hidayah Gg. Lengkeng'
    }
  ]
};


var holidayEvents = {
  id: 3,
  backgroundColor: '#fcbfdc',
  borderColor: '#f10075',
  events: [
  ]
};

var discoveredEvents = {
  id: 4,
  backgroundColor: '#bff2f2',
  borderColor: '#00cccc',
  events: [
  ]
};

var meetupEvents = {
  id: 5,
  backgroundColor: '#dedafe',
  borderColor: '#5b47fb',
  events: [
  ]
};


var otherEvents = {
  id: 6,
  backgroundColor: '#ffdec4',
  borderColor: '#fd7e14',
  events: [
  ]
};
