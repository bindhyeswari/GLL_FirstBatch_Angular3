/**
 * Created by mishrab on 6/19/14.
 */

document.addEventListener('DOMContentLoaded', function (){

    // get an HTMLElementCollection containing all the children of tbody
    var trs = document.getElementById('CompanylistResults').firstElementChild.children;
    console.log(trs);

    // The first tr element is the heading
    // From then on, the data for every company is in a pair of trs
    // So total companies listed on the page = half of (number of trs - 1)

    var num_companies = (trs.length - 1) / 2;
    var arr_companies = [];
    for (var i = 0; i < num_companies; i++) {
        var td = trs[2 * i + 1].firstElementChild;
        var td2 = trs[2 * i + 1].children[1];
        if (td.firstElementChild) {
            arr_companies.push({
                name: td.firstElementChild.innerHTML,
                symbol: td2.firstElementChild.firstElementChild.firstElementChild.innerHTML.toString().trim()
            });
        } else {
            arr_companies.push({
                name: td.innerHTML,
                symbol: td2.firstElementChild.firstElementChild.firstElementChild.innerHTML.toString().trim()
            });
        }
    }
    console.log(JSON.stringify(arr_companies));

    var noSymbols = arr_companies.filter(function (company){
        return !company.symbol
    });
    console.log(noSymbols);

});
