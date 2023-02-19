<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'type',  'img', 'description', 'price', 'hotel_id'];

    // TODO: Añadir equipamiento al los hoteles
    //protected $fillable = ['name', 'type',  'img', 'description', 'price', 'hotel_id', 'equipment'];

    public function hotel()
    {
        return $this->belongsTo(Hotel::class);
    }
}
