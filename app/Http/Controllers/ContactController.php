<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $locations = [
            [
                'id' => 1,
                'name' => 'ULTRAFLEX WEST LEEDS',
                'slug' => 'west-leeds',
                'address' => 'Cape Mills, Coal Hill Ln, Leeds LS28 5NA',
                'phone' => '0113 256 5107',
                'email' => 'leeds@ultraflexgym.co.uk',
                'coordinates' => ['lat' => 53.8508, 'lng' => -1.6044],
                'mapUrl' => 'https://www.google.com/maps/place/ULTRAFLEX+-+Gym+in+Leeds/@53.8145635,-1.8008911,12z/data=!4m10!1m2!2m1!1sULTRAFLEX+Gym+west+Leeds!3m6!1s0x487be20054e5db95:0xb639aa48f8129fed!8m2!3d53.8145635!4d-1.6608154!15sChhVbHRyYUZsZXggR3ltIHdlc3QgTGVlZHNaGiIYdWx0cmFmbGV4IGd5bSB3ZXN0IGxlZWRzkgEDZ3ltmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4a2NWVllXbGxaTVZaQ1lsZHNNMkp0VW5SVlZUbHhWRlJTTkZGV1JSQULgAQD6AQUIwwEQQg!16s%2Fg%2F11c319zc40?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
            ],
            [
                'id' => 2,
                'name' => 'ULTRAFLEX NORTH LEEDS',
                'slug' => 'north-leeds',
                'address' => 'Limewood Approach, Seacroft, Leeds LS14 1NH',
                'phone' => '0113 513 7671',
                'email' => 'northleeds@ultraflexgym.co.uk',
                'coordinates' => ['lat' => 53.8371, 'lng' => -1.4909],
                'mapUrl' => 'https://www.google.com/maps/place/ULTRAFLEX+Gym+North+Leeds/@53.8310007,-1.4685853,17z/data=!3m1!4b1!4m6!3m5!1s0x48795bdf67a4199d:0x161674f7e205d7b2!8m2!3d53.8309976!4d-1.4660104!16s%2Fg%2F11kbymfhg8?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
            ],
            [
                'id' => 3,
                'name' => 'ULTRAFLEX NORMANTON',
                'slug' => 'normanton',
                'address' => 'Ripley Dr, Normanton WF6 1QT',
                'phone' => '01924 895794',
                'email' => 'normanton@ultraflexgym.co.uk',
                'coordinates' => ['lat' => 53.7085, 'lng' => -1.4168],
                'mapUrl' => 'https://www.google.com/maps/place/ULTRAFLEX+Normanton/@53.7018856,-1.4042812,17z/data=!3m1!4b1!4m6!3m5!1s0x48795da40af09e07:0x586579d496b76ed3!8m2!3d53.7018825!4d-1.4017063!16s%2Fg%2F11fdkx44lv?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
            ],
            [
                'id' => 4,
                'name' => 'ULTRAFLEX ROTHERHAM',
                'slug' => 'rotherham',
                'address' => '175 Effingham St, Rotherham S65 1BL',
                'phone' => '0170 937 7311',
                'email' => 'rotherham@ultraflexgym.co.uk',
                'coordinates' => ['lat' => 53.4326, 'lng' => -1.3568],
                'mapUrl' => 'https://www.google.com/maps/place/ULTRAFLEX+-+Gym+in+Rotherham/@53.4380464,-1.3554535,17z/data=!3m1!4b1!4m6!3m5!1s0x48797709d1450b65:0x25be57d0fbe940e3!8m2!3d53.4380432!4d-1.3528786!16s%2Fg%2F11gp35wlzk?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
            ],
            [
                'id' => 5,
                'name' => 'ULTRAFLEX YORK',
                'slug' => 'york',
                'address' => '10 Layerthorpe, York YO31 7YW',
                'phone' => '01904 623383',
                'email' => 'york@ultraflexgym.co.uk',
                'coordinates' => ['lat' => 54.0059, 'lng' => -1.0810],
                'mapUrl' => 'https://www.google.com/maps/place/ULTRAFLEX+-+Gym+in+York/@53.9620338,-1.0749673,17z/data=!3m1!4b1!4m6!3m5!1s0x487931d9a664f0c1:0xa5b0aa55abc8b897!8m2!3d53.9620307!4d-1.0723924!16s%2Fg%2F11h7fzf0w2?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
            ],
            [
                'id' => 6,
                'name' => 'ULTRAFLEX HULL',
                'slug' => 'hull',
                'address' => 'Business Park, 261 Hawthorn Avenue Trackside, Hull HU3 5EN',
                'phone' => '01482 327874',
                'email' => 'hull@ultraflexgym.co.uk',
                'coordinates' => ['lat' => 53.7443, 'lng' => -0.3325],
                'mapUrl' => 'https://www.google.com/maps/place/ULTRAFLEX+Hull/@53.7370945,-0.3793473,17z/data=!3m1!4b1!4m6!3m5!1s0x4878bf4224c223bf:0xdf1edfef5956e5db!8m2!3d53.7370945!4d-0.3793473!16s%2Fg%2F11h_46zghn?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
            ],
            [
                'id' => 7,
                'name' => 'ULTRAFLEX DURHAM',
                'slug' => 'durham',
                'address' => 'Mandale Business Park, Unit 28D, Kent House, Durham DH1 1TH',
                'phone' => '0191 3898321',
                'email' => 'durham@ultraflexgym.co.uk',
                'coordinates' => ['lat' => 54.7760, 'lng' => -1.5733],
                'mapUrl' => 'https://www.google.com/maps/place/ULTRAFLEX+-+Gym+in+Durham/@54.7885757,-1.5341394,17z/data=!3m1!4b1!4m6!3m5!1s0x487e7ddf0af67a83:0xc2c9d1ae77103247!8m2!3d54.7885757!4d-1.5341394!16s%2Fg%2F11fs7zcll9?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
            ],
            [
                'id' => 8,
                'name' => 'ULTRAFLEX DERBY',
                'slug' => 'derby',
                'address' => 'Chequers Rd, Derby DE21 6EN',
                'phone' => '07395616771',
                'email' => 'derby@ultraflexgym.co.uk',
                'coordinates' => ['lat' => 52.9225, 'lng' => -1.4746],
                'mapUrl' => 'https://www.google.com/maps/place/ULTRAFLEX+Derby/@52.9209207,-1.4514623,17z/data=!3m1!4b1!4m6!3m5!1s0x4879f1ba94609079:0x22c967098ab40dcd!8m2!3d52.9209175!4d-1.4488874!16s%2Fg%2F11vb8bxxlh?coh=277535&entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoKLDEwMDc5MjA3M0gBUAM%3D&skid=00b71a2c-ba9f-4c14-8f06-71774134c920',
            ],
            [
                'id' => 9,
                'name' => 'ULTRAFLEX ATHENS (GREECE)',
                'slug' => 'athens-greece',
                'address' => 'Ethnarchou Makariou 16, Peristeri 121 32, Greece',
                'phone' => '+30 21 0578 5856',
                'email' => 'athens@ultraflexgym.co.uk',
                'coordinates' => ['lat' => 37.8651, 'lng' => 23.7622],
                'mapUrl' => 'https://maps.app.goo.gl/6diUmYWbJLchFDMV7',
            ],
            [
                'id' => 10,
                'name' => 'ULTRAFLEX LINCOLN',
                'slug' => 'lincoln',
                'address' => '3 Pioneer Way, Lincoln LN6 3DH',
                'phone' => '01522 454320',
                'email' => 'lincoln@ultraflexgym.co.uk',
                'coordinates' => ['lat' => 53.2307, 'lng' => -0.5406],
                'mapUrl' => 'https://www.google.com/maps/place/ULTRAFLEX+Lincoln/@53.2010099,-0.5950846,17z/data=!3m1!4b1!4m6!3m5!1s0x4878453a2df04e4d:0x2e4b6b6facf2e70d!8m2!3d53.2010068!4d-0.5902137!16s%2Fg%2F11wg7fn_1m?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
            ],
            [
                'id' => 11,
                'name' => 'ULTRAFLEX WEST LONDON',
                'slug' => 'west-london',
                'address' => 'Point West, 2, Packet Boat Ln, Uxbridge UB8 2JP',
                'phone' => '01895 436000',
                'email' => 'westlondon@ultraflexgym.co.uk',
                'coordinates' => ['lat' => 51.5074, 'lng' => -0.2296],
                'mapUrl' => 'https://www.google.com/maps/place/ULTRAFLEX+-+Gym+in+West+London/@51.5199897,-0.4833574,17z/data=!3m1!4b1!4m6!3m5!1s0x48766e049076b79b:0x50c88ea22ee842ae!8m2!3d51.5199864!4d-0.4807825!16s%2Fg%2F1tj88y5l?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
            ],
        ];

        return Inertia::render('Contact/Index', [
            'locations' => $locations,
            'locationOptions' => collect($locations)->map(fn($l) => [
                'id' => $l['id'],
                'name' => $l['name']
            ])->values(),
            'gymContacts' => $locations
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:2000',
            'location_id' => 'required|integer',
            'g_recaptcha_response' => 'nullable|string'
        ]);

        // Verify Google reCAPTCHA v2 token if provided
        $recaptcha = $request->input('g_recaptcha_response');
        if ($recaptcha) {
            $secret = config('services.recaptcha.secret') ?? env('RECAPTCHA_SECRET');
            if ($secret) {
                try {
                    $verify = \Illuminate\Support\Facades\Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
                        'secret' => $secret,
                        'response' => $recaptcha,
                        'remoteip' => $request->ip(),
                    ]);
                    $valid = $verify->ok() && ($verify->json('success') === true);
                    if (! $valid) {
                        return back()->withErrors(['captcha' => 'CAPTCHA verification failed. Please try again.'])->withInput();
                    }
                } catch (\Throwable $e) {
                    return back()->withErrors(['captcha' => 'CAPTCHA service error. Please try again later.'])->withInput();
                }
            }
        }

        // Here you would typically:
        // 1. Save to database
        // 2. Send email notification
        // 3. Maybe use a service like ContactForm::create($request->all())

        // For now, just return success
        return redirect()->back()->with('success', 'Thank you for your message! We\'ll get back to you soon.');
    }
}