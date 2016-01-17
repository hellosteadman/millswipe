/*global escape: true */
/*global console: true */
/*exported KeyValueStore */

var KeyValueStore = function(KV_STORE_KEY) {
    var KV_STORE_URL = 'https://poddle.io/kv/';

    return {
        getPair: function(key, cb, err) {
            if(typeof(console) !== 'undefined') {
                console.log('Getting data from', key);
            }

            $.ajax(
                {
                    url: KV_STORE_URL + KV_STORE_KEY + '/pairs/?key=' + escape(key),
                    dataType: 'json',
                    success: cb,
                    error: err
                }
            );
        },
        incrementCounter: function(key, cb, err) {
            if(typeof(console) !== 'undefined') {
                console.log('Incrementing counter for', key);
            }

            $.ajax(
                {
                    url: KV_STORE_URL + KV_STORE_KEY + '/counters/?key=' + escape(key),
                    type: 'post',
                    dataType: 'json',
                    success: cb,
                    error: err
                }
            );
        },
        getCounter: function(key, cb, err) {
            if(typeof(console) !== 'undefined') {
                console.log('Getting counter for', key);
            }

            $.ajax(
                {
                    url: KV_STORE_URL + KV_STORE_KEY + '/counters/?key=' + escape(key),
                    dataType: 'json',
                    success: cb,
                    error: err
                }
            );
        },
        getCounters: function(cb, err) {
            if(typeof(console) !== 'undefined') {
                console.log('Getting counters');
            }

            $.ajax(
                {
                    url: KV_STORE_URL + KV_STORE_KEY + '/counters/',
                    dataType: 'json',
                    success: cb,
                    error: err
                }
            );
        }
    };
};
