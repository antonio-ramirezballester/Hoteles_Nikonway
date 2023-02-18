<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $hotels = Hotel::all();
        return response()->json($hotels);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $hotel=Hotel::create($request->all());
        $data=[
            'message'=>'Hotel creacted successfuly',
            'hotel'=>$hotel
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function show(Hotel $hotel)
    {
        $data=[
            'message'=>'Hotel details',
            'hotel'=>$hotel
        ];
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function edit(Hotel $hotel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hotel $hotel)
    {
        $hotel->name = $request->name;
        $hotel->img = $request->img;
        $hotel->description = $request->description ;
        $hotel->localization = $request->localization;
        // TODO: Añadir equipamiento al los hoteles
        // $hotel->equipment = $request->equipment;
        $hotel->save();
        $data=[
            'message'=>'Hotel updated successfuly',
            'hotel'=>$hotel
        ];
        return response()->json($data);
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hotel $hotel)
    {
        $hotel->delete();
        $data=[
            'message'=>'Hotel deleted successfuly',
            'hotel'=>$hotel
        ];
        return response()->json($data);
    }
}
