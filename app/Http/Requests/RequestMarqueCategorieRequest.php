<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestMarqueCategorieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()?true:false;//->can('someAbility');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nom' => 'required|max:250',
            'description' => 'nullable|max:10000',
            'photo' => 'nullable|sometimes|mimes:jpeg,png,jpg,gif,webp
                    |dimensions:min_width=50,min_height=50,
                    max_width=2500,max_height=2500'
        ];
    }
}
