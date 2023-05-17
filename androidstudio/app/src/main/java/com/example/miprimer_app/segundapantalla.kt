package com.example.mifirstapp

import android.content.Intent
import android.os.Bundle
import android.widget.Adapter
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.miprimer_app.MainActivity
import com.example.miprimer_app.R
import com.example.miprimer_app.adaptador

class segundapantalla:  AppCompatActivity(){

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.segundapantalla)

        val btnBack = findViewById<Button>(R.id.btn_navegar)
        btnBack.setOnClickListener{
            startActivity(Intent(this, MainActivity::class.java))
        }

        val  msg = "Done"
        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()


    }


}