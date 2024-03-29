import React from 'react'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const MuiTable = () => {
    return (
        <Box p={4}>
            <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
                <Table aria-lable='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell align='center'>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map(row => (
                                <TableRow key={row} sx={{ '&:last-child td, &:lastchild th': { border: 0 } }}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.first_name}</TableCell>
                                    <TableCell>{row.last_name}</TableCell>
                                    <TableCell>{row.gender}</TableCell>
                                    <TableCell align='center'>{row.email}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default MuiTable

const tableData = [{
    "id": 1,
    "first_name": "Benjie",
    "last_name": "Arundel",
    "email": "barundel0@foxnews.com",
    "gender": "Polygender",
    "ip_address": "70.220.85.161"
}, {
    "id": 2,
    "first_name": "Suzann",
    "last_name": "Kenealy",
    "email": "skenealy1@youtu.be",
    "gender": "Female",
    "ip_address": "118.39.2.45"
}, {
    "id": 3,
    "first_name": "Avictor",
    "last_name": "Paggitt",
    "email": "apaggitt2@ed.gov",
    "gender": "Male",
    "ip_address": "30.68.193.192"
}, {
    "id": 4,
    "first_name": "Belinda",
    "last_name": "Enoksson",
    "email": "benoksson3@archive.org",
    "gender": "Female",
    "ip_address": "207.145.32.238"
}, {
    "id": 5,
    "first_name": "Donal",
    "last_name": "Perrett",
    "email": "dperrett4@bravesites.com",
    "gender": "Male",
    "ip_address": "196.204.126.87"
}, {
    "id": 6,
    "first_name": "Lillis",
    "last_name": "Pitkeathley",
    "email": "lpitkeathley5@yelp.com",
    "gender": "Female",
    "ip_address": "192.39.206.239"
}, {
    "id": 7,
    "first_name": "Simone",
    "last_name": "Surridge",
    "email": "ssurridge6@pagesperso-orange.fr",
    "gender": "Female",
    "ip_address": "242.1.224.88"
}, {
    "id": 8,
    "first_name": "Moritz",
    "last_name": "Bolsover",
    "email": "mbolsover7@abc.net.au",
    "gender": "Male",
    "ip_address": "167.246.51.39"
}, {
    "id": 9,
    "first_name": "Danica",
    "last_name": "Abberley",
    "email": "dabberley8@imdb.com",
    "gender": "Female",
    "ip_address": "137.204.232.235"
}, {
    "id": 10,
    "first_name": "Ilaire",
    "last_name": "Deeves",
    "email": "ideeves9@cafepress.com",
    "gender": "Male",
    "ip_address": "214.116.11.252"
}, {
    "id": 11,
    "first_name": "Margarita",
    "last_name": "Bucksey",
    "email": "mbuckseya@nytimes.com",
    "gender": "Female",
    "ip_address": "188.228.34.45"
}, {
    "id": 12,
    "first_name": "Hasty",
    "last_name": "Halbard",
    "email": "hhalbardb@china.com.cn",
    "gender": "Male",
    "ip_address": "124.186.109.52"
}, {
    "id": 13,
    "first_name": "Werner",
    "last_name": "McLewd",
    "email": "wmclewdc@ox.ac.uk",
    "gender": "Polygender",
    "ip_address": "9.42.43.149"
}, {
    "id": 14,
    "first_name": "Bill",
    "last_name": "Conochie",
    "email": "bconochied@pagesperso-orange.fr",
    "gender": "Female",
    "ip_address": "146.222.155.174"
}, {
    "id": 15,
    "first_name": "Archaimbaud",
    "last_name": "Kantor",
    "email": "akantore@forbes.com",
    "gender": "Male",
    "ip_address": "80.87.81.178"
}, {
    "id": 16,
    "first_name": "Margarita",
    "last_name": "Kirwin",
    "email": "mkirwinf@harvard.edu",
    "gender": "Female",
    "ip_address": "147.58.145.142"
}, {
    "id": 17,
    "first_name": "Eveline",
    "last_name": "Tollmache",
    "email": "etollmacheg@usa.gov",
    "gender": "Female",
    "ip_address": "154.21.239.25"
}, {
    "id": 18,
    "first_name": "Irwin",
    "last_name": "Moyles",
    "email": "imoylesh@naver.com",
    "gender": "Male",
    "ip_address": "250.4.138.35"
}, {
    "id": 19,
    "first_name": "Giralda",
    "last_name": "Buckbee",
    "email": "gbuckbeei@patch.com",
    "gender": "Female",
    "ip_address": "242.155.67.237"
}, {
    "id": 20,
    "first_name": "Earvin",
    "last_name": "Thow",
    "email": "ethowj@japanpost.jp",
    "gender": "Male",
    "ip_address": "190.48.215.28"
}, {
    "id": 21,
    "first_name": "Anson",
    "last_name": "Tilbey",
    "email": "atilbeyk@arstechnica.com",
    "gender": "Male",
    "ip_address": "248.38.191.142"
}, {
    "id": 22,
    "first_name": "Jaye",
    "last_name": "Temlett",
    "email": "jtemlettl@parallels.com",
    "gender": "Male",
    "ip_address": "155.76.157.175"
}, {
    "id": 23,
    "first_name": "Beth",
    "last_name": "Rainer",
    "email": "brainerm@sfgate.com",
    "gender": "Female",
    "ip_address": "206.66.176.54"
}, {
    "id": 24,
    "first_name": "Byrle",
    "last_name": "Anthill",
    "email": "banthilln@dailymotion.com",
    "gender": "Male",
    "ip_address": "177.142.92.99"
}, {
    "id": 25,
    "first_name": "Gottfried",
    "last_name": "Bonar",
    "email": "gbonaro@163.com",
    "gender": "Male",
    "ip_address": "173.101.107.2"
}, {
    "id": 26,
    "first_name": "Dougie",
    "last_name": "Gartshore",
    "email": "dgartshorep@about.me",
    "gender": "Bigender",
    "ip_address": "201.189.196.20"
}, {
    "id": 27,
    "first_name": "Jeniece",
    "last_name": "Sara",
    "email": "jsaraq@dedecms.com",
    "gender": "Female",
    "ip_address": "67.43.46.162"
}, {
    "id": 28,
    "first_name": "Niko",
    "last_name": "Bartot",
    "email": "nbartotr@noaa.gov",
    "gender": "Male",
    "ip_address": "175.125.183.222"
}, {
    "id": 29,
    "first_name": "Hally",
    "last_name": "House",
    "email": "hhouses@timesonline.co.uk",
    "gender": "Female",
    "ip_address": "78.2.197.118"
}, {
    "id": 30,
    "first_name": "Abe",
    "last_name": "Clover",
    "email": "aclovert@hugedomains.com",
    "gender": "Male",
    "ip_address": "33.107.160.77"
}, {
    "id": 31,
    "first_name": "Dun",
    "last_name": "Eaglesham",
    "email": "deagleshamu@cloudflare.com",
    "gender": "Male",
    "ip_address": "18.242.241.143"
}, {
    "id": 32,
    "first_name": "Nealon",
    "last_name": "Barbara",
    "email": "nbarbarav@surveymonkey.com",
    "gender": "Male",
    "ip_address": "51.158.80.167"
}, {
    "id": 33,
    "first_name": "Teddi",
    "last_name": "Sange",
    "email": "tsangew@umn.edu",
    "gender": "Female",
    "ip_address": "89.200.75.145"
}, {
    "id": 34,
    "first_name": "Byrom",
    "last_name": "Meigh",
    "email": "bmeighx@wikispaces.com",
    "gender": "Male",
    "ip_address": "128.31.79.52"
}, {
    "id": 35,
    "first_name": "Hewie",
    "last_name": "Mathe",
    "email": "hmathey@posterous.com",
    "gender": "Male",
    "ip_address": "92.223.81.202"
}, {
    "id": 36,
    "first_name": "Deny",
    "last_name": "Livick",
    "email": "dlivickz@irs.gov",
    "gender": "Female",
    "ip_address": "102.185.250.189"
}, {
    "id": 37,
    "first_name": "Zebulen",
    "last_name": "Birney",
    "email": "zbirney10@bigcartel.com",
    "gender": "Male",
    "ip_address": "227.48.68.202"
}, {
    "id": 38,
    "first_name": "Osborne",
    "last_name": "Crookes",
    "email": "ocrookes11@seattletimes.com",
    "gender": "Male",
    "ip_address": "165.139.49.59"
}, {
    "id": 39,
    "first_name": "Briano",
    "last_name": "Ongin",
    "email": "bongin12@apache.org",
    "gender": "Male",
    "ip_address": "76.126.91.29"
}, {
    "id": 40,
    "first_name": "Hyacintha",
    "last_name": "Heppenspall",
    "email": "hheppenspall13@blinklist.com",
    "gender": "Genderfluid",
    "ip_address": "40.185.142.129"
}, {
    "id": 41,
    "first_name": "Emmet",
    "last_name": "McIlmorie",
    "email": "emcilmorie14@slashdot.org",
    "gender": "Male",
    "ip_address": "62.60.164.110"
}, {
    "id": 42,
    "first_name": "Ileane",
    "last_name": "Diben",
    "email": "idiben15@pcworld.com",
    "gender": "Female",
    "ip_address": "77.47.68.19"
}, {
    "id": 43,
    "first_name": "Lauree",
    "last_name": "Gorse",
    "email": "lgorse16@arizona.edu",
    "gender": "Female",
    "ip_address": "53.83.29.171"
}, {
    "id": 44,
    "first_name": "Tessi",
    "last_name": "Babber",
    "email": "tbabber17@wiley.com",
    "gender": "Female",
    "ip_address": "252.183.218.167"
}, {
    "id": 45,
    "first_name": "Marrilee",
    "last_name": "Bohills",
    "email": "mbohills18@comcast.net",
    "gender": "Female",
    "ip_address": "152.116.244.135"
}, {
    "id": 46,
    "first_name": "Jenilee",
    "last_name": "Osmon",
    "email": "josmon19@zdnet.com",
    "gender": "Female",
    "ip_address": "83.144.247.124"
}, {
    "id": 47,
    "first_name": "Harlie",
    "last_name": "Katte",
    "email": "hkatte1a@ucsd.edu",
    "gender": "Female",
    "ip_address": "81.3.210.46"
}, {
    "id": 48,
    "first_name": "Merrilee",
    "last_name": "Lauthian",
    "email": "mlauthian1b@gravatar.com",
    "gender": "Female",
    "ip_address": "50.185.97.78"
}, {
    "id": 49,
    "first_name": "Milzie",
    "last_name": "Schwandt",
    "email": "mschwandt1c@about.com",
    "gender": "Female",
    "ip_address": "3.116.179.151"
}, {
    "id": 50,
    "first_name": "Mickie",
    "last_name": "Tanby",
    "email": "mtanby1d@nps.gov",
    "gender": "Male",
    "ip_address": "236.20.188.78"
}, {
    "id": 51,
    "first_name": "Brody",
    "last_name": "Towns",
    "email": "btowns1e@nyu.edu",
    "gender": "Male",
    "ip_address": "92.132.229.167"
}, {
    "id": 52,
    "first_name": "Bernhard",
    "last_name": "Wimbush",
    "email": "bwimbush1f@tiny.cc",
    "gender": "Male",
    "ip_address": "95.239.226.57"
}, {
    "id": 53,
    "first_name": "Cinnamon",
    "last_name": "Crumbie",
    "email": "ccrumbie1g@bravesites.com",
    "gender": "Female",
    "ip_address": "31.201.113.107"
}, {
    "id": 54,
    "first_name": "Pansy",
    "last_name": "Beadel",
    "email": "pbeadel1h@miibeian.gov.cn",
    "gender": "Female",
    "ip_address": "182.176.144.1"
}, {
    "id": 55,
    "first_name": "Walker",
    "last_name": "Sager",
    "email": "wsager1i@dropbox.com",
    "gender": "Agender",
    "ip_address": "137.148.210.211"
}, {
    "id": 56,
    "first_name": "Alena",
    "last_name": "Pabst",
    "email": "apabst1j@yahoo.com",
    "gender": "Female",
    "ip_address": "22.248.48.203"
}, {
    "id": 57,
    "first_name": "Lurleen",
    "last_name": "Stedson",
    "email": "lstedson1k@smh.com.au",
    "gender": "Female",
    "ip_address": "2.215.200.31"
}, {
    "id": 58,
    "first_name": "Diahann",
    "last_name": "Jump",
    "email": "djump1l@archive.org",
    "gender": "Female",
    "ip_address": "192.127.54.64"
}, {
    "id": 59,
    "first_name": "Moss",
    "last_name": "Sedgefield",
    "email": "msedgefield1m@goodreads.com",
    "gender": "Male",
    "ip_address": "186.201.200.245"
}, {
    "id": 60,
    "first_name": "Valenka",
    "last_name": "Allwood",
    "email": "vallwood1n@apple.com",
    "gender": "Female",
    "ip_address": "1.192.200.3"
}, {
    "id": 61,
    "first_name": "Malvin",
    "last_name": "Ghilardi",
    "email": "mghilardi1o@arizona.edu",
    "gender": "Male",
    "ip_address": "217.234.138.155"
}, {
    "id": 62,
    "first_name": "Gerhardine",
    "last_name": "Bruntje",
    "email": "gbruntje1p@japanpost.jp",
    "gender": "Female",
    "ip_address": "83.214.211.231"
}, {
    "id": 63,
    "first_name": "Spencer",
    "last_name": "Lowsely",
    "email": "slowsely1q@independent.co.uk",
    "gender": "Male",
    "ip_address": "173.250.33.78"
}, {
    "id": 64,
    "first_name": "Lannie",
    "last_name": "Hackworth",
    "email": "lhackworth1r@bloglines.com",
    "gender": "Polygender",
    "ip_address": "20.2.125.76"
}, {
    "id": 65,
    "first_name": "Granny",
    "last_name": "Holton",
    "email": "gholton1s@patch.com",
    "gender": "Male",
    "ip_address": "212.88.196.156"
}, {
    "id": 66,
    "first_name": "Lizabeth",
    "last_name": "Attryde",
    "email": "lattryde1t@angelfire.com",
    "gender": "Female",
    "ip_address": "97.75.22.60"
}, {
    "id": 67,
    "first_name": "Jarrett",
    "last_name": "Dafydd",
    "email": "jdafydd1u@diigo.com",
    "gender": "Male",
    "ip_address": "189.201.167.214"
}, {
    "id": 68,
    "first_name": "Evin",
    "last_name": "Matthensen",
    "email": "ematthensen1v@slashdot.org",
    "gender": "Male",
    "ip_address": "188.165.201.167"
}, {
    "id": 69,
    "first_name": "Ambrosi",
    "last_name": "Northway",
    "email": "anorthway1w@ebay.com",
    "gender": "Male",
    "ip_address": "136.147.76.208"
}, {
    "id": 70,
    "first_name": "Yalonda",
    "last_name": "Jenson",
    "email": "yjenson1x@nba.com",
    "gender": "Female",
    "ip_address": "195.219.64.152"
}, {
    "id": 71,
    "first_name": "Cullan",
    "last_name": "Martyntsev",
    "email": "cmartyntsev1y@netscape.com",
    "gender": "Male",
    "ip_address": "32.88.129.195"
}, {
    "id": 72,
    "first_name": "Jo ann",
    "last_name": "Gramer",
    "email": "jgramer1z@canalblog.com",
    "gender": "Female",
    "ip_address": "120.148.179.96"
}, {
    "id": 73,
    "first_name": "Berny",
    "last_name": "Headington",
    "email": "bheadington20@addtoany.com",
    "gender": "Male",
    "ip_address": "48.174.16.206"
}, {
    "id": 74,
    "first_name": "Brita",
    "last_name": "Quiddihy",
    "email": "bquiddihy21@apache.org",
    "gender": "Female",
    "ip_address": "64.116.141.9"
}, {
    "id": 75,
    "first_name": "Elfreda",
    "last_name": "MacLese",
    "email": "emaclese22@ca.gov",
    "gender": "Female",
    "ip_address": "33.179.154.122"
}, {
    "id": 76,
    "first_name": "Caz",
    "last_name": "Dearing",
    "email": "cdearing23@nationalgeographic.com",
    "gender": "Male",
    "ip_address": "230.241.96.98"
}, {
    "id": 77,
    "first_name": "Federico",
    "last_name": "Liggins",
    "email": "fliggins24@google.nl",
    "gender": "Male",
    "ip_address": "253.148.129.217"
}, {
    "id": 78,
    "first_name": "Zarah",
    "last_name": "Durrell",
    "email": "zdurrell25@prlog.org",
    "gender": "Female",
    "ip_address": "26.72.167.241"
}, {
    "id": 79,
    "first_name": "Bevon",
    "last_name": "Lillywhite",
    "email": "blillywhite26@github.io",
    "gender": "Male",
    "ip_address": "123.69.82.153"
}, {
    "id": 80,
    "first_name": "Perry",
    "last_name": "Osant",
    "email": "posant27@cloudflare.com",
    "gender": "Female",
    "ip_address": "161.120.249.48"
}, {
    "id": 81,
    "first_name": "Cathy",
    "last_name": "Burchett",
    "email": "cburchett28@archive.org",
    "gender": "Female",
    "ip_address": "164.201.50.160"
}, {
    "id": 82,
    "first_name": "Tomaso",
    "last_name": "Dumbelton",
    "email": "tdumbelton29@weather.com",
    "gender": "Male",
    "ip_address": "93.208.85.232"
}, {
    "id": 83,
    "first_name": "Rem",
    "last_name": "Oluwatoyin",
    "email": "roluwatoyin2a@jiathis.com",
    "gender": "Bigender",
    "ip_address": "81.10.21.16"
}, {
    "id": 84,
    "first_name": "Trish",
    "last_name": "Mimmack",
    "email": "tmimmack2b@nature.com",
    "gender": "Female",
    "ip_address": "156.18.111.157"
}, {
    "id": 85,
    "first_name": "Donelle",
    "last_name": "Darlasson",
    "email": "ddarlasson2c@squidoo.com",
    "gender": "Female",
    "ip_address": "10.212.23.12"
}, {
    "id": 86,
    "first_name": "Rafferty",
    "last_name": "Ogilvy",
    "email": "rogilvy2d@stanford.edu",
    "gender": "Male",
    "ip_address": "43.4.156.7"
}, {
    "id": 87,
    "first_name": "Wilona",
    "last_name": "Semrad",
    "email": "wsemrad2e@mapy.cz",
    "gender": "Non-binary",
    "ip_address": "27.192.193.86"
}, {
    "id": 88,
    "first_name": "Karyn",
    "last_name": "Servant",
    "email": "kservant2f@purevolume.com",
    "gender": "Female",
    "ip_address": "89.77.166.44"
}, {
    "id": 89,
    "first_name": "Dreddy",
    "last_name": "Hogbourne",
    "email": "dhogbourne2g@ed.gov",
    "gender": "Female",
    "ip_address": "129.24.139.79"
}, {
    "id": 90,
    "first_name": "Natty",
    "last_name": "Yetts",
    "email": "nyetts2h@com.com",
    "gender": "Male",
    "ip_address": "40.221.51.19"
}, {
    "id": 91,
    "first_name": "Grover",
    "last_name": "Habbema",
    "email": "ghabbema2i@moonfruit.com",
    "gender": "Male",
    "ip_address": "124.78.40.198"
}, {
    "id": 92,
    "first_name": "Whitney",
    "last_name": "Schreurs",
    "email": "wschreurs2j@skype.com",
    "gender": "Female",
    "ip_address": "203.9.37.210"
}, {
    "id": 93,
    "first_name": "Rey",
    "last_name": "Opy",
    "email": "ropy2k@accuweather.com",
    "gender": "Female",
    "ip_address": "91.84.72.99"
}, {
    "id": 94,
    "first_name": "Benjamin",
    "last_name": "Boskell",
    "email": "bboskell2l@vk.com",
    "gender": "Male",
    "ip_address": "153.153.118.114"
}, {
    "id": 95,
    "first_name": "Layney",
    "last_name": "Muddimer",
    "email": "lmuddimer2m@merriam-webster.com",
    "gender": "Female",
    "ip_address": "244.181.171.66"
}, {
    "id": 96,
    "first_name": "Arabelle",
    "last_name": "Ruggieri",
    "email": "aruggieri2n@etsy.com",
    "gender": "Female",
    "ip_address": "101.39.92.214"
}, {
    "id": 97,
    "first_name": "Mordy",
    "last_name": "Elgood",
    "email": "melgood2o@google.ru",
    "gender": "Male",
    "ip_address": "100.0.190.200"
}, {
    "id": 98,
    "first_name": "Iseabal",
    "last_name": "Marguerite",
    "email": "imarguerite2p@sogou.com",
    "gender": "Genderfluid",
    "ip_address": "76.12.173.95"
}, {
    "id": 99,
    "first_name": "Dena",
    "last_name": "Dunlea",
    "email": "ddunlea2q@xinhuanet.com",
    "gender": "Female",
    "ip_address": "47.230.194.57"
}, {
    "id": 100,
    "first_name": "Kippy",
    "last_name": "Duffree",
    "email": "kduffree2r@eventbrite.com",
    "gender": "Male",
    "ip_address": "111.18.241.235"
}]