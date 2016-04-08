package com.example.clemente.fragment_2;

import android.app.Activity;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class MainActivity extends Activity {
    private static final String TAG = "Activity";
    private static final String FRAGMENT = "primofragment";
    MyFragment couterFragment;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG, "M:onCreate");
        setContentView(R.layout.activity_main);

        //creazione fragment
        FragmentManager fragmentManager = getFragmentManager();
        couterFragment = (MyFragment) getFragmentManager().findFragmentByTag(FRAGMENT);

        if(couterFragment == null) {

            FragmentTransaction vTrans = fragmentManager.beginTransaction();

            couterFragment = new MyFragment();

            vTrans.add(R.id.container, couterFragment, FRAGMENT);
            vTrans.commit();
        }

        Button plus = (Button) findViewById(R.id.plus);
        plus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                couterFragment.inc();

            }
        });

        Button less = (Button) findViewById(R.id.less);
        less.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                couterFragment.dec();

            }
        });

        Button back = (Button) findViewById(R.id.back);
        back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });



    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d(TAG, "M:onPause");
    }

    @Override
    protected void onStop(){
        super.onStop();
        Log.d(TAG, "M:onStop");

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d(TAG, "M:onDestroy");
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d(TAG, "M:onStart");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d(TAG, "M:onRestart");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d(TAG, "M:onResume");
    }
}
