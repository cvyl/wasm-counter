use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Counter {
    value: i32,
}

#[wasm_bindgen]
impl Counter {
    pub fn new() -> Counter {
        Counter { value: 0 }
    }

    pub fn get_value(&self) -> i32 {
        self.value
    }

    pub fn increment(&mut self) {
        self.value += 1;
    }

    pub fn decrement(&mut self) {
        self.value -= 1;
    }
}
