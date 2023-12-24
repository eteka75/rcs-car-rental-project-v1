<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestEnLocationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'voiture_id' => 'required|exists:voitures,id',
            'point_retrait_id' => 'required|exists:point_retraits,id',
            'tarif_location_heure' => 'nullable|integer|min:0|max:9999999999',
            'tarif_location_journalier' => 'nullable|integer|min:0|max:9999999999',
            'tarif_location_hebdomadaire' => 'nullable|integer|min:0|max:9999999999',
            'tarif_location_mensuel' => 'nullable|integer|min:0|max:9999999999',
            'date_debut_location' => 'required|date_format:d/m/Y|max:50',
            'date_fin_location' => 'required|date_format:d/m/Y|max:50',
            'conditions' => 'required|min:5|max:1000000',
            'description' => 'nullable|max:100000',
        ];
    }
}
