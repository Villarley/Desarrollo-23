package com.example.miprimer_app

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        var boton1 = findViewById<Button>(R.id.button1)
        var pantallita = findViewById<TextView>(R.id.pantallita)
        boton1.setOnClickListener{
            pantallita.setText(boton1.text)
        }
    }
}