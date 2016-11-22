declare var google: any;
let calendarConfObject: any = {
    type: 'date',
    minDate: new Date(),
    text: {
        days: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        daysLong: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        months: ['Janvier', 'Février', 'Mars', 'Avri', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Aujourd\'hui',
        now: 'Maintenant',
        am: 'AM',
        pm: 'PM'
    },
    formatter: {
        date: (date: Date, settings) => {
            let weeks = settings.text.daysLong;
            let months = settings.text.months;
            return `${weeks[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        }
    },
    parser: {
        date: (text, settigs) => {
            let elems = text.split(' ').slice(1);
            return Date.parse(elems.join(' '));
        }
    }
};
export function calendarConf(changeEv) {
    calendarConfObject.onChange = changeEv;
    return calendarConfObject;
}

export const googlePlacesAPI: Object = {
    responseAsync: function (settings, callback) {
        let query = settings.urlData.query;
        if (query) {
            let service = new google.maps.places.AutocompleteService();
            let cb = function (prediction, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    prediction = prediction.map(p => ({
                            title: p.terms[0].value,
                            value: p.terms[0].value,
                            name: p.terms[0].value
                    }));
                    callback({
                        sucess : true,
                        results : prediction
                    });
                }
            };
            service.getPlacePredictions({
                input: query,
                types: ['(cities)'],
                componentRestrictions: { country: 'fr' }
            }, cb);
        }
    }
}

export const dropdownConf: Object = {
    placeholder: 'Entrez le nom d\'une ville',
    allowTab: false,
    match: 'text',
    allowAdditions: true,
    hideAdditions: false,
    fields: {
        value: 'value'
    },
    message: {
        addResult: 'Ajouter <b>{term}</b>',
        noResults: 'Aucune ville n\'a été trouvée'
    },
    apiSettings: googlePlacesAPI
}