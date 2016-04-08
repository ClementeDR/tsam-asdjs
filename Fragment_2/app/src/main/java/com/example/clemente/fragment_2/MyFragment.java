package com.example.clemente.fragment_2;


import android.app.Fragment;
import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;


/**
 * A simple {@link Fragment} subclass.
 */
public class MyFragment extends Fragment {
    private static final String TAG = "Fragment";
    private static final String COUNTER = "counter";
    TextView textView;
    int counter;

    public MyFragment() {
        // Required empty public constructor
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        Log.d(TAG, "onAttach");

    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG,"onCreate" + this);
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        Log.d(TAG,"onCreateView" + this);
        if(savedInstanceState != null){
            counter = savedInstanceState.getInt(COUNTER);
        }

        View view = inflater.inflate(R.layout.counter_layout, container, false);
        textView = (TextView) view.findViewById(R.id.txt1);
        textView.setText("" + counter);


        // Inflate the layout for this fragment
        return view;
    }

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        Log.d(TAG, "onActivityCreated");

    }

    @Override
    public void onStart() {
        super.onStart();
        Log.d(TAG, "onStart");

    }

    @Override
    public void onResume() {
        super.onResume();
        Log.d(TAG, "onResume");

    }

    @Override
    public void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        outState.putInt(COUNTER, counter);
        Log.d(TAG, "onSave");

    }

    @Override
    public void onPause() {
        super.onPause();
        Log.d(TAG, "onPause");

    }

    @Override
    public void onStop() {
        super.onStop();
        Log.d(TAG, "onStop");

    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.d(TAG, "onDestroy");

    }

    @Override
    public void onDetach() {
        super.onDetach();
        Log.d(TAG, "onDetach");

    }

    public void inc(){
        counter++;
        textView.setText("" + counter);

    }

    public void dec(){
        counter--;
        textView.setText("" + counter);
    }
}
