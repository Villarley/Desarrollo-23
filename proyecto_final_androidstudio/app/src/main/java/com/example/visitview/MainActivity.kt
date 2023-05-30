package com.example.visitview

import android.annotation.SuppressLint
import android.app.Activity
import android.content.ContentValues
import android.content.Intent
import android.content.pm.PackageManager
import android.location.LocationManager
import android.media.Image
import android.net.Uri
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.MediaStore

import android.util.Base64
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.textfield.TextInputLayout
import com.google.gson.annotations.SerializedName
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Field
import retrofit2.http.FormUrlEncoded
import retrofit2.http.PUT


class MainActivity : AppCompatActivity() {
    var imagenenbase64: String = ""

    data class foto(
        var ejex: String,
        var ejey: String,
        var imagencruda: String
    )

    data class User(

        @SerializedName("NOMBRE") var NOMBRE: String,
        @SerializedName("APELLIDO") var APELLIDO: String,
        @SerializedName("PASSWORD") var PASSWORD: String,
        @SerializedName("FOTO") var FOTO: String,
        )

    var listadelabasededatos:MutableList<User> = ArrayList()

    interface APIService {
        @PUT("nuevoUsuario")
        @FormUrlEncoded
        fun registrationPut(
            @Field("NOMBRE") NOMBRE: String,
            @Field("APELLIDO") APELLIDO: String,
            @Field("PASSWORD") PASSWORD: String,
            @Field("FOTO") FOTO: String


        ): Call<MutableList<User>>
    }





    private fun getRetrofit(): Retrofit {
        return Retrofit.Builder()
            .baseUrl("http://192.168.52.1:8880/api/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }

    private  val IMAGE_CAPTURE_CODE = 1001

    private val PERMISSION_CODE = 1000;





    var image_uri: Uri? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        var btncaptura = findViewById<Button>(R.id.btnFoto)

        btncaptura.setOnClickListener {
            openCamera()
        }
        var btn_obras = findViewById<Button>(R.id.guardar)
        var NOMBRE = findViewById<EditText>(R.id.NOMBRE)
        var APELLIDO = findViewById<EditText>(R.id.PROVINCIA)
        var PASSWORD = findViewById<EditText>(R.id.DISTRITO)

        btn_obras.setOnClickListener {
            CoroutineScope(Dispatchers.IO).launch {

                val call = getRetrofit().create(APIService::class.java).registrationPut(NOMBRE.text.toString(), APELLIDO.text.toString(), PASSWORD.text.toString(), imagenenbase64.toString(),).execute()
// Log.d("",call.body().toString())
// val puppies = call.body() as String?
                runOnUiThread {
//SharedApp.diasdelmes = call.body()!!
                    listadelabasededatos = call.body()!!
                    setUpRecyclerView()
//Log.d("",puppies.toString())
//setUpRecyclerView()
// Log.d("",call.body().toString())
                }



            }
        }
    }

    private fun openCamera(){
        val values = ContentValues()
        values.put(MediaStore.Images.Media.TITLE,"New Picture")
        values.put(MediaStore.Images.Media.DESCRIPTION,"From the camera")

        image_uri = contentResolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values)
        val cameraIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
        cameraIntent.putExtra(MediaStore.EXTRA_OUTPUT, image_uri)
        startActivityForResult(cameraIntent, IMAGE_CAPTURE_CODE)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data) //called when image was captured from camera intent
        val bytes = image_uri?.let { contentResolver.openInputStream(it)?.readBytes() }
        imagenenbase64 = Base64.encodeToString(bytes, Base64.DEFAULT)
        Log.d("imgbse64",imagenenbase64.toString())
        var img_foto =  findViewById<ImageView>(R.id.fotoLugar)

        img_foto.setImageURI(image_uri)


    }

    lateinit var mRecyclerView: RecyclerView

    //EL ADAPTADOR, NECESARIO PARA CONECTAR EL RECYCLER VIEW CON EL DISENO LAYOUT Y LA LISTA DE ESTUDIANTES
    val mAdapter: adapter = adapter()
    private fun setUpRecyclerView() {


        mRecyclerView = findViewById(R.id.listaLugares)
        mRecyclerView.setHasFixedSize(true)
        mRecyclerView.layoutManager = LinearLayoutManager(this)
        mAdapter.adapter(listadelabasededatos, this)
        mRecyclerView.adapter = mAdapter

    }


}