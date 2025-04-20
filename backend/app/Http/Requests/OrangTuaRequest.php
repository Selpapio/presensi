<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrangTuaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        //return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if (request()->isMethod('post')) {
            return [
                "nis" => "required|string|max:258",
                "jenis_surat" => "required",
                "alasan" => "required",
                "lampiran" => "required|images|mimes:jpeg,png,jpg,gif,svg|max:2048",
            
            ];
        } else {
        return [
            "nis" => "required|string|max:258",
            "jenis_surat" => "required",
            "alasan" => "required",
            "lampiran" => "required|images|mimes:jpeg,png,jpg,gif,svg|max:2048",
        ];
    }
    }

    public function messages()
    {
        if (request()->isMethod('post')) {
            return [
                "nis.required" => "Nis is required",
                "jenis_surat.required" => "Jenis surat is required",
                "alasan.required" => "Alasan is required",
                "lampiran.required" => "Lampiran is required",
            ];
        } else {
            return [
                "nis.required" => "Nis is required",
                "jenis_surat.required" => "Jenis surat is required",
                "alasan.required" => "Alasan is required",
            ];
        }
    }
}