package com.example.miprimer_app

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class adaptador : RecyclerView.Adapter<adaptador.ViewHolder>() {

    var operacionesdelacalculadora:MutableList<MainActivity.operaciondelacalculadora> = ArrayList()

    lateinit var context: Context

    fun adaptador(listadeoperaciones: MutableList<MainActivity.operaciondelacalculadora>, context: Context){
        this.operacionesdelacalculadora = listadeoperaciones
        this.context = context

    }
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = operacionesdelacalculadora.get(position)
        holder.bind(item, context)
    }
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        return ViewHolder(layoutInflater.inflate(
            R.layout.disenoquesereplica, parent, false))
    }
    override fun getItemCount(): Int {
        return operacionesdelacalculadora.size
    }
    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val operandouno = view.findViewById(R.id.operando1) as TextView
        val operandodos = view.findViewById(R.id.operando2) as TextView
        val respuesta = view.findViewById(R.id.respuesta) as TextView
        val operacion = view.findViewById(R.id.operacion) as TextView
        val botonelimina = view.findViewById(R.id.btnelimina) as Button
        fun bind(operaciondelacalculadora: MainActivity.operaciondelacalculadora, context: Context){
            operandouno.text = operaciondelacalculadora.operando1.toString()
            operandodos.text=operaciondelacalculadora.operando2.toString()
            respuesta.text=operaciondelacalculadora.resultado.toString()
            operacion.text = operaciondelacalculadora.operacion.toString()


        }

    }
}