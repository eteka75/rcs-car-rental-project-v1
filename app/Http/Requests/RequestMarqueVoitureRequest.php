<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestMarqueVoitureRequest extends FormRequest
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
       // sleep(2);
        return [
            'nom' => 'required|max:250',
            'pays_id' => 'required|exists:pays,id',
            'annee_fondation' => 'required|integer|min:0|max:9999',
            'description' => 'nullable|max:10000',
            'site_web' => 'nullable|url',
            //'logo' => 'nullable|sometimes|mimes:jpeg,png,jpg,gif,webp|dimensions:min_width=100,min_height=100,max_width=2000,max_height=2000'
            'logo' => 'nullable|sometimes'
        ];
    }
}
