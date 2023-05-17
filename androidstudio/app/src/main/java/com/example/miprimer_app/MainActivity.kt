package com.example.miprimer_app

import android.app.Application
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.mifirstapp.segundapantalla
import java.math.BigInteger

class MainActivity : AppCompatActivity() {
    class Shareddata : Application() {
        companion object {
            lateinit var todaslasoperaciones: MutableList<operaciondelacalculadora>
        }
        override fun onCreate() {
            super.onCreate()
            todaslasoperaciones = ArrayList()
        }
    }
    lateinit var mRecyclerView: RecyclerView
    val  mAdapter : adaptador = adaptador()
    fun setUpRecyclerView(){
        mRecyclerView = findViewById(R.id.Recycling) as RecyclerView
        mRecyclerView.setHasFixedSize(true)
        mRecyclerView.layoutManager  = LinearLayoutManager(this)
        mAdapter.adaptador(MainActivity.Shareddata.todaslasoperaciones, this)
        mRecyclerView.adapter = mAdapter
    }
    data class operaciondelacalculadora(

        var operando1:BigInteger ,
        var operando2:BigInteger,
        var resultado:BigInteger,
        var operacion:String
    )//clase que declara
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        var boton0 = findViewById<Button>(R.id.button0)
        var boton1 = findViewById<Button>(R.id.button1)
        var boton2 = findViewById<Button>(R.id.button2)
        var boton3 = findViewById<Button>(R.id.button3)
        var boton4 = findViewById<Button>(R.id.button4)
        var boton5 = findViewById<Button>(R.id.button5)
        var boton6 = findViewById<Button>(R.id.button6)
        var boton7 = findViewById<Button>(R.id.button7)
        var boton8 = findViewById<Button>(R.id.button8)
        var boton9 = findViewById<Button>(R.id.button9)
        var eliminar = findViewById<Button>(R.id.eliminar)
        var operando1 = 0
        var operando2 = 0
        var res = 0
        var operacion = ""
        var pantallita = findViewById<TextView>(R.id.pantallita)
        boton1.setOnClickListener {
            pantallita.setText(pantallita.text.toString() + "1")

        }
        boton2.setOnClickListener {
            pantallita.setText(pantallita.text.toString() + "2")

        }
        boton3.setOnClickListener {
            pantallita.setText(pantallita.text.toString() + "3")

        }
        boton4.setOnClickListener {
            pantallita.setText(pantallita.text.toString() + "4")

        }
        boton5.setOnClickListener {
            pantallita.setText(pantallita.text.toString() + "5")

        }
        boton6.setOnClickListener {
            pantallita.setText(pantallita.text.toString() + "6")

        }
        boton7.setOnClickListener {
            pantallita.setText(pantallita.text.toString() + "7")

        }
        boton8.setOnClickListener {
            pantallita.setText(pantallita.text.toString() + "8")

        }
        boton9.setOnClickListener {
            pantallita.setText(pantallita.text.toString() + "9")

        }
        eliminar.setOnClickListener {
            pantallita.setText("")

        }
        val botonmas = findViewById<Button>(R.id.mas)
        botonmas.setOnClickListener {
            operando1 = pantallita.text.toString().toInt()
            operacion = "mas"
            pantallita.setText("")

        }
        val botoniguaL = findViewById<Button>(R.id.igual)
        botoniguaL.setOnClickListener {
            operando2 = pantallita.text.toString().toInt()
            when (operacion) {
                "mas" -> res = operando1 + operando2
                "menos" -> res = operando1 - operando2

            }
            pantallita.setText(res.toString())
            boton1.setOnClickListener {
                pantallita.setText(boton1.text)
            }
            setUpRecyclerView()
        }
        val btn_n = findViewById<Button>(R.id.btn_navega)
        btn_n.setOnClickListener{
            val intent = Intent(this, segundapantalla::class.java)
            startActivity(intent)
        }
    }
}

