<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\Room;

class Hotel extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'img', 'description', 'localization', 'phone_number', 'email'];

    // TODO: Añadir equipamiento al los hoteles
    //protected $fillable = ['name', 'img', 'description', 'localization', 'phone_number', 'email', 'equipment'];

    public function rooms()
    {
	    return $this->hasMany(Room::class);
    }
}
