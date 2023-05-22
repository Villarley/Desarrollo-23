package apps.experimental.apisactualizado

import android.app.AlertDialog
import android.content.Context
import android.content.DialogInterface
import android.graphics.BitmapFactory
import android.net.Uri
import android.util.Base64
import android.util.Log
import android.view.KeyEvent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.recyclerview.widget.RecyclerView
import com.google.gson.Gson
import com.squareup.picasso.Picasso

import kotlin.collections.ArrayList

class adapter   : RecyclerView.Adapter<adapter.ViewHolder>()  {

    var Estudiantes:MutableList<MainActivity.ferreteriamongo> = ArrayList()

    lateinit var context: Context

    fun adapter(estudiantes: MutableList<MainActivity.ferreteriamongo>, context: Context){
        this. Estudiantes = estudiantes
        this.context = context

    }
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = Estudiantes.get(position)
        holder.bind(item, context)
    }
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        return ViewHolder(layoutInflater.inflate(R.layout.item_layout, parent, false))
    }
    override fun getItemCount(): Int {
        return Estudiantes.size
    }

    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {

        val nombre = view.findViewById(R.id.nombre) as TextView

        val herramienta = view.findViewById(R.id.herramienta) as TextView
        val precio = view.findViewById(R.id.precio) as TextView
        val fotodelestudiante = view.findViewById(R.id.foto) as ImageView

        fun bind(estudiante: MainActivity.ferreteriamongo, context: Context){
            nombre.text = estudiante.nombre
            herramienta.text =  estudiante.herramienta
            precio.text = estudiante.precio
            if(estudiante.imagen != "") {
                try {
                    var imagenendos = estudiante.imagen.split(',')
                    Log.d("imagen ", estudiante.imagen)
                    val imageBytes = Base64.decode(estudiante.imagen, Base64.DEFAULT)
                    val decodedImage =
                        BitmapFactory.decodeByteArray(imageBytes, 0, estudiante.imagen.length)
                    fotodelestudiante.setImageBitmap(decodedImage)
                    } catch(e : Exception){

                    }

            }

        }

    }

}