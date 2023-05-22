package apps.experimental.apisactualizado

import android.app.Application
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.EditText
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.gson.annotations.SerializedName
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.*

class MainActivity : AppCompatActivity() {

    data class ferreteriamongo(

        @SerializedName("nombre") var nombre: String,
        @SerializedName("herramienta") var herramienta: String,
        @SerializedName("precio") var precio: String,
        @SerializedName("imagen") var imagen: String,
    )

var listadelabasededatos:MutableList<ferreteriamongo> = ArrayList()


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        btn_obras.setOnClickListener {
        CoroutineScope(Dispatchers.IO).launch {


            //HACERLO CON TODOS LOS EDITTEXT DEL DISENNO
            var textonombre = findViewById<EditText>(R.id.nombre)
            var textodescripcion = findViewById<EditText>(R.id.descripcion)
            val call = getRetrofit().create(APIService::class.java).registrationPut(
                textonombre.text.toString(),"otaku"
                ,
                "10", "").execute()

           // Log.d("",call.body().toString())
          //  val puppies = call.body() as String?
            runOnUiThread {
                listadelabasededatos = call.body()!!
            //    Log.i("", call.body()!!.toString())
                setUpRecyclerView()
               //Log.d("",puppies.toString())
                //setUpRecyclerView()
               // Log.d("",call.body().toString())
            }
        }}
    }

    interface APIService {
        @PUT("nuevaoperacion")
        @FormUrlEncoded
        fun registrationPut(
            @Field("nombre") nombre: String,
            @Field("herramienta") herramienta: String,
            @Field("precio") precio: String,
            @Field("imagen") imagen: String


        ): Call<MutableList<ferreteriamongo>>
    }

    private fun getRetrofit(): Retrofit {
        return Retrofit.Builder()
            .baseUrl("http://192.168.50.219:8080/api/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }
    lateinit var mRecyclerView : RecyclerView
    //EL ADAPTADOR, NECESARIO PARA CONECTAR EL RECYCLER VIEW CON EL DISENO LAYOUT Y LA LISTA DE ESTUDIANTES
    val mAdapter : adapter = adapter()
    fun setUpRecyclerView(){


        mRecyclerView = findViewById(R.id.listadeobras) as RecyclerView
        mRecyclerView.setHasFixedSize(true)
        mRecyclerView.layoutManager = LinearLayoutManager(this)
        mAdapter.adapter(listadelabasededatos, this)
        mRecyclerView.adapter = mAdapter

    }
}