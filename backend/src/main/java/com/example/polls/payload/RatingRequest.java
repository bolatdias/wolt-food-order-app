package com.example.polls.payload;

import javax.validation.constraints.NotBlank;

public class RatingRequest {
    @NotBlank
    private int rate;


    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }
}
