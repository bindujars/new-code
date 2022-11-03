package com.august.memo;

//import java.util.HashMap;
//import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class MemoService implements ServiceInterface {
   
    public String getResult(){
        return "Get Mapping";
    }
    public String postResult(Object name){
        System.out.println(name);
        return "Post Mapping";
    }
    public String putResult(Object name)
    {
        System.out.println(name);
        return"Put Mapping"; 
    }
    public String deletResult(Object id){
        System.out.println(id);
        return "Delete Mapping";
    }
    @Override
    public String DeleteResult(Object id) {
        // TODO Auto-generated method stub
        return null;
    }
    
}
