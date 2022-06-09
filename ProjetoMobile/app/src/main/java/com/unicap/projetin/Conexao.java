package com.unicap.projetin;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Conexao {

    public static String getDados(String uri) throws IOException {
        BufferedReader bufferReader = null;

        try {
            URL url = new URL(uri);
            HttpURLConnection httpConnection = (HttpURLConnection) url.openConnection();

            StringBuilder stringBuilder = new StringBuilder();
            bufferReader = new BufferedReader(new InputStreamReader(httpConnection.getInputStream()));

            String linha;

            while((linha = bufferReader.readLine()) != null){
                stringBuilder.append(linha+"\n");
            }

            return stringBuilder.toString();
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }finally {
            if(bufferReader != null){
                bufferReader.close();
            }
        }
    }
}
